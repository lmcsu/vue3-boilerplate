<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        msg: string;
    }>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1 {
        margin: 40px 0 0;
    }
</style>
