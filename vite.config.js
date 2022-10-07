import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/bootstrap.min.css',
                'resources/js/app.js',
                'resources/css/auth.css',
                'resources/js/backend/backend.js',
                'resources/js/auth/auth.js',
                'resources/js/asset/js/jquery-3.6.0.min.js',
                'resources/js/asset/js/main.js'
            ],
            refresh: true,
        }),
    ],
});
