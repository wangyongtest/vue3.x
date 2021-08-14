import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
import ViteComponents from 'vite-plugin-components'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        ViteComponents()
    ]
})
