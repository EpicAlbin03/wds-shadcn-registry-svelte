// @ts-check
import { defineCollection, defineConfig, s } from 'velite';

const docSchema = s
	.object({
		title: s.string(),
		description: s.string(),
		path: s.path(),
		navLabel: s.string().optional(),
		links: s
			.object({
				doc: s.string().optional(),
				api: s.string().optional(),
				source: s.string().optional()
			})
			.optional(),
		component: s.boolean().default(false),
		toc: s.toc()
	})
	.transform((data) => {
		return {
			...data,
			slug: data.path.split('/').slice(1).join('/'),
			slugFull: `/${data.path}`
		};
	});

const components = defineCollection({
	name: 'components',
	pattern: './components/**/*.md',
	schema: docSchema
});

const installation = defineCollection({
	name: 'installation',
	pattern: './installation/**/*.md',
	schema: docSchema
});

export default defineConfig({
	root: './content',
	collections: {
		components,
		installation
	},
	output: { assets: 'static' }
});
