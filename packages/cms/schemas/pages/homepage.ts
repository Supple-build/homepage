import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Homepage',
	name: 'homepage',
	type: 'document',
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		defineField({
			name: 'metaData',
			type: 'metaData',
			group: 'seo',
		}),
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
	],
})
