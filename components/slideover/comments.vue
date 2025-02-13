<script setup lang="ts">
const isLoading = ref(false)
</script>

<template>
    <div class="relative h-12">
        <UInput size="lg" placeholder="Create a comment..." color="blue" />
        <div class="absolute top-0 right-0 bottom-0">
            <UButton color="blue" size="lg">
                <Icon name="material-symbols:add" size="20" />
            </UButton>
        </div>
    </div>

    <div v-if="isLoading" class="flex items-center space-x-4 mt-4">
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
            <USkeleton class="h-4 w-[250px]" />
            <USkeleton class="h-4 w-[200px]" />
        </div>
    </div>

    <div v-else>
        <div class="flex items-start mt-4">
            <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="20" />
            <div class="border-border rounded-md w-full bg-gray-800 relative px-3">
                <div class="absolute right-2 bottom-1 text-blue-500 text-sm font-bold">12:23</div>
                <p class="pt-3 pb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsa aperiam cum consequatur eius nulla blanditiis beatae voluptatibus tenetur ex maiores!
                </p>
            </div>
        </div>
    </div>
</template>