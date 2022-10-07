import './bootstrapBackend';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "../routes/backend";

import App from './app.vue';

const routerBack = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(routerBack);
app.mount("#app");