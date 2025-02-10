<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite';
import { useAuthStore } from '~/store/auth.store';
import { useLoadingStore } from '~/store/loading.store';


const authStore = useAuthStore()
const loadingStore = useLoadingStore()

onMounted(() => {
    ACCOUNT.get()
        .then(response => authStore.set({
            email: response.email, 
            id: response.$id, 
            name: response.name, 
            status: response.status
        }))
        .finally(() => {
            loadingStore.set(false)
        })
})

console.log(authStore.currentUser)

</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />
    <template v-else>
        <!-- <div>Main</div> -->
        <section class="min-h-screen bg-white dark:bg-black">
            <LayoutsMainNavbar />
            <slot />
        </section>
    </template>
</template>