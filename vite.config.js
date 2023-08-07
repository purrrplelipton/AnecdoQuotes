import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@bits': resolve(__dirname, 'src/bits'),
      '@store': resolve(__dirname, 'src/store'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
