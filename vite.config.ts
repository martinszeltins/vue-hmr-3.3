import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { warmup } from 'vite-plugin-warmup'

export default defineConfig({
    plugins: [
        vue(),
        warmup({ clientFiles: ['./**/*.html'] }),
    ],
})
