import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy OData requests to avoid CORS issues in the browser
      '/sap': {
        target: 'https://my300181-api.s4hana.ondemand.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
