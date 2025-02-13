<script setup lang="ts">
import { ACCOUNT } from '~/libs/appwrite'
import {useAuthStore} from '~/store/auth.store'
import {useLoadingStore} from '~/store/loading.store'


const router = useRouter()
const authStore = useAuthStore()
const loadingStore = useLoadingStore()
onMounted(() => {
    ACCOUNT.get()
        .then((response) => {
            loadingStore.set(false)
            authStore.set({
                email: response.email, 
                id: response.$id, 
                name: response.name, 
                status: response.status
            })
            // const {data, isLoading, refetch} = useStatusQuery()
        })
        .catch(() => router.push('/auth'))
})
</script>

<template>
    <!-- <div>
        <h1>Documents Layout</h1>
    </div> -->
    <UiLoader v-if="loadingStore.isLoading" />
    <main v-else>
        <LayoutsNavbar />
        <LayoutsSidebar />
        <section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
            <div class="p-4">
                <slot />
            </div>
        </section>
    </main>
</template>