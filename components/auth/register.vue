<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ACCOUNT, UNIQUE_ID } from '~/libs/appwrite';


const props = defineProps({
  toggleLogin: {
    type: Function,
    required: true,
  }
})

const toast = useToast()

const isLoading = ref(false)
const error = ref('')

const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  isLoading.value = true
  //   console.log(event.data)
  const { name, email, password } = event.data

  try {
    // const response = await ACCOUNT.create(UNIQUE_ID, email, password, name)
    // console.log(response)
    await ACCOUNT.create(UNIQUE_ID, email, password, name)
    // await ACCOUNT.createEmailSession(email, password)
    props.toggleLogin()
    toast.add({
      title: 'Account created',
      description: 'You can now login with your new account',
    })
    // console.log("1234")
    isLoading.value = false
  } catch (err: any) {
    isLoading.value = false
    error.value = err.message
    // console.error(err)
  }
}
</script>

<template>
  <UAlert
    icon="i-heroicons-command-line"
    :description="error"
    title="Error"
    v-if="error"
    color="red"
    variant="outline"
  />
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" color="blue" block size="lg" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" block size="lg" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" block size="lg" />
    </UFormGroup>

    <div class="text-sm text-neutral-500">
      Already have an account?
      <span class="text-blue-500 hover:underline" role="button" @click="$props.toggleLogin">
        Sign in
      </span>
    </div>

    <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isLoading">
      <!-- Submit -->
      <template v-if="isLoading"><Icon name="svg-spinners:3-dots-scale" class="w-5 h-6" /></template>
      <template v-else>Next</template>
    </UButton>
  </UForm>
</template>