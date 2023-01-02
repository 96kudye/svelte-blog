import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (moduleName) => {
          if (moduleName.includes('smui')) {
            return 'smui'
          }
          if (moduleName.includes('cheerio')) {
            return 'cheerio'
          }
          if (moduleName.includes('highlight')) {
            return 'highlight'
          }
          if (moduleName.includes('node_modules')) {
            return 'vendor'
          }
          return 'main'
        }
      }
    }
  }
};

export default config;
