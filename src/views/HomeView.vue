<template>
    <div class="home">
        <div>
            <img
                alt="Vue logo"
                src="../assets/logo.png"
            >
        </div>

        <el-button
            size="large"
            @click="store.clicks++"
        >
            Clicks {{ store.clicks }}
        </el-button>

        <HelloWorld msg="Welcome to Your Vue.js + TypeScript + Element Plus + Pinia + Eslint App" />
    </div>
</template>

<script setup lang="ts">
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import { useStore } from '@/composables/useStore';

    const store = useStore();
</script>
