import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    cssMinify: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-DgTwgse2.js',
        chunkFileNames: 'assets/index-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/index-6zLurZgK.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.includes('node_modules') && id.endsWith('.js')) {
          return transformWithOxc(code, id, { lang: 'jsx' });
        }
        return null;
      },
    },
    react(),
  ],
});
