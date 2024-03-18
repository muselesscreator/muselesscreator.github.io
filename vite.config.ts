import { defineTestConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dsv from '@rollup/plugin-dsv'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~' : '/src',
      '~/components': '/src/components',
      '~/data': '/src/data',
    },
  },
  plugins: [
    dsv(),
    react(),
  ],
  test: {
    environment: 'jsdom',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
});
