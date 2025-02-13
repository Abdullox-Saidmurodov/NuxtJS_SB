<script setup lang="ts">
// import {ACCOUNT} from '~/libs/appwrite'
// import {useLoadingStore} from '~/store/loading.store'
import {useAuthStore} from '~/store/auth.store'
import {status} from '~/constants/index'
import { useStatusQuery } from '~/query/use-status-query'
import { Icon } from '#components'

definePageMeta({
    layout: 'documents',
})
useHead({title: 'Documents | Jira software'})

// const {userId} = useAuthStore()
// console.log("15", userId)

// const router = useRouter()
// const loadingStore = useLoadingStore()
// const authStore = useAuthStore()

// onMounted(() => {
//     ACCOUNT.get()
//         .then((response) => {
//             loadingStore.set(false)
//             authStore.set({
//                 email: response.email, 
//                 id: response.$id, 
//                 name: response.name, 
//                 status: response.status
//             })
//             // const {data, isLoading, refetch} = useStatusQuery()
//         })
//         .catch(() => router.push('/auth'))
// })

const {data, isLoading, refetch} = useStatusQuery() //userId
// console.log("+ ", data)
</script>

<template>
    <div class="grid grid-cols-4 gap-2 mt-12" v-if="isLoading">
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />

        <UiDealsLoader />
        <UiDealsLoader />
        <UiDealsLoader />
        <UiDealsLoader />
    </div>
    <div class="grid grid-cols-4 gap-2 mt-12" v-else>
        <div v-for="(item) in data" :key="item.id">
            <UButton class="w-full h-12" color="blue" variant="outline">
                <div class="flex items-center space-x-2">
                    <span class="font-bold">{{ item.name }}</span>
                    <span class="text-sm text-neutral-500">{{ item.items.length }}</span>
                </div>
            </UButton>

            <SharedCreateDeal :status="item.id" :refetch="refetch" />

            <div class="my-3 dark:bg-gray-900 bg-gray-100 rounded-md p-2 animation" 
                 v-for="card in item.items" :key="card.$id"
                 role="button"
                 draggable="true">
                <div class="flex items-center space-x-2">
                    <span class="font-bold text-lg uppercase">{{ card.name }}</span>
                </div>

                <UDivider class="my-3" />
    
                <div class="opacity-55 text-sm line-clamp-1">
                    {{ card.description }}
                </div>

                <UButton color="blue" class="w-full mt-3 group" variant="ghost">
                    <span class="font-bold">More details</span>
                    <Icon name="material-symbols:arrow-right-alt-rounded" class="group-hover:translate-x-2 transition" />
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes show {
    from {
        transform: scale(0.5) translate(-30px);
        opacity: 0.4;
    }
    to {
        transform: scale(1) translate(0);
        opacity: 1;
    }
}

.animation {
    animation: show 0.3s ease-in-out;
}
</style>