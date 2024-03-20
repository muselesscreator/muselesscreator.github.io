import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import dsv from '@rollup/plugin-dsv'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~' : '/src',
      '~/components': '/src/components',
      '~/data': '/src/data',
      '~/pages': '/src/pages',
    },
  },
  plugins: [
    dsv(),
    react(),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
});
