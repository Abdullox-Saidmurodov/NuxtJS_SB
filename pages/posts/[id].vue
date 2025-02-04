<script setup lang="ts">
    // const doc = "Documentation"
    const route = useRoute()
</script>

<template>
    <div>
        <!-- <h1>Post id {{ doc }}</h1> -->
        <h1>Documentation id: {{ route.params.id }}</h1>
    </div>
</template>