import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }],
        globals: true,
        environment: 'jsdom',
        setupFiles: 'tests/setupTest.js',
        include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
}))