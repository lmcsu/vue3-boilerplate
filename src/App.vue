<template>
    <el-config-provider size="large">
        <nav>
            <router-link to="/">
                Home
            </router-link>
            |
            <router-link to="/about">
                About
            </router-link>
        </nav>

        <router-view />
    </el-config-provider>
</template>

<script setup lang="ts">
    //
</script>

<style lang="scss">
    html {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
    }

    #app {
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
