import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [
        vue(),
        eslintPlugin(),
        Components({
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: resolve(__dirname, 'components.d.ts'),
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        target: 'ES2016',
        cssTarget: 'chrome50',
        emptyOutDir: true,
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: [
                resolve(__dirname, 'src/index.html'),
            ],
            output: {
                manualChunks(id) {
                    return id.match(/\/node_modules\/([^/]+)/)?.[1];
                },
            },
        },
    },
});
