import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url'
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({
            autoImport: true,
            // styles: {
            //     configFile: 'src/styles/settings.scss',
            // },
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),

    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
