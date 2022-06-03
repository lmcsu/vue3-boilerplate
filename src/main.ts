import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'normalize.css';

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(createPinia())
    .mount('#app');
