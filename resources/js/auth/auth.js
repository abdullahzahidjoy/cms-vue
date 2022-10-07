import './bootstrapAuth';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "../routes/authRoute";

import App from './auth.vue';

const router = createRouter({
    history: createWebHistory(),
    routes
})

const auth = createApp(App)
auth.use(router);
auth.mount("#app");
