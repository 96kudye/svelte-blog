import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      trailingSlash: 'never',
      fallback: 'index.html'
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (
          path === "/pagefind/pagefind-ui.css" ||
          path === "/pagefind/pagefind-ui.js"
        ) {
          return;
        }

        throw new Error(message);
      },
    },
  },
};

export default config;
