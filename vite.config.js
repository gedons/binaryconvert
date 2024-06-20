import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Binary Decimal Converter',
        short_name: 'Converter',
        description: 'A simple binary and decimal converter.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon.ico',
            sizes: '192x192',
            type: 'image/ico',
          },
          {
            src: '/icon.ico',
            sizes: '512x512',
            type: 'image/ico',
          },
        ],
      },
    }),
  ],
});
