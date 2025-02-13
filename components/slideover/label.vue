<script setup lang="ts">
defineProps({
    labelText: {type: String, required: true},
})
</script>

<template>
    <label v-if="labelText" class="opacity-75 mb-0.5 block text-xs">
        {{ labelText }}
    </label>

    <div class="text-base"><slot /></div>
</template>