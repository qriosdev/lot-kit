import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
// import { routes } from './src/lib/data/routesData.js';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;

const config = {
	kit: {
		adapter: adapter({}),

		// prerender: {
		// 	entries: [...routes]
		// },
		vite: {
			// plugins: [imagetools({ force: true })],

			resolve: {
				alias: {
					$comp: path.resolve('./src/lib/components'),
					$util: path.resolve('./src/lib/utils'),
					$act: path.resolve('./src/lib/actions'),
					$data: path.resolve('./src/lib/data'),
					$stores: path.resolve('./src/lib/stores'),
					$content: path.resolve('./src/lib/content')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: `@use '${sassPath}global' as *;`
			}
		}),
		mdsvex({ extensions: ['.md', '.svx'] })
	],

	extensions: ['.svelte', '.md']
};

export default config;
