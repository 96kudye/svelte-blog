import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      trailingSlash: 'never',
      precompress: true,
      fallback: null,
    }),
    prerender: {
      entries: [
        '/',
        '/tag/574',
        '/tag/650',
        '/tag/943',
        '/article/1671742007',
        '/article/1671821156',
        '/article/1671996780',
        '/article/1672457431',
      ]
    }
  },

  env: {
    dir: process.cwd()
  }
};

export default config;
