import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const hljs_used_langs = [
  'html',
  'javascript'
]

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
            if (moduleName.includes('languages')) {
              return hljs_used_langs.some((lang) => moduleName.includes(lang)) ? 'highlight' : 'highlight_unused'
            }
            return 'highlight'
          }
          if (moduleName.includes('node_modules')) {
            return 'vendor'
          }
          if (moduleName.includes('lib/components')) {
            return 'components'
          }
          return 'main'
        }
      }
    }
  }
};

export default config;
