<template>
    <div class="about">
        <h1>This is an about page</h1>

        <div>
            Clicks {{ store.clicks }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from '@/composables/useStore';

    const store = useStore();
</script>
