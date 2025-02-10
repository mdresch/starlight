// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/mdresch/starlight',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Getting Started', slug: 'start-here/getting-started' },
						{ label: 'Manual Setup', slug: 'start-here/manual-setup'},
						{ label: 'Environmental Impact', slug: 'start-here/environmental-impact'},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Pages', slug: 'guides/pages' },
						{ label: 'Authoring Content in Markdown', slug: 'guides/markdown' },
						
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
