// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
		    plugins: [starlightCatppuccin()],
			title: 'Docs',
			logo: {
              src: './src/assets/fryrvo_branding/Logo_bg.png',
			},
			social: [
			 {
             icon: 'github',
             label: 'GitHub',
             href: 'https://github.com/FryrvoS',
             },
			 {
             icon: 'discord',
             label: 'Discord',
             href: 'https://fryrvo.com/discord',
             },
		    ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
