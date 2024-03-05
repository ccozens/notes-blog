import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess({})],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'], // defines routes that will invoke a function
				exclude: ['<all>'] // defines routes that will not invoke a function (<all> matches build, files, and prerendered pages)
			}
		})
	}
};

export default config;
