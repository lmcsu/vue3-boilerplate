import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(createPinia())
    .mount('#app');
