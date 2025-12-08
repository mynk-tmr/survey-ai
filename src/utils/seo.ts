export const seo = ({
	title,
	description,
	image,
}: {
	title: string
	description?: string
	image?: string
	keywords?: string
}) => {
	const tags = [
		{
			charSet: 'utf-8',
		},
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1',
		},
		{ title },
		{ name: 'description', content: description },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:title', content: title },
		{ name: 'og:description', content: description },
		...(image
			? [
					{ name: 'twitter:image', content: image },
					{ name: 'twitter:card', content: 'summary_large_image' },
					{ name: 'og:image', content: image },
				]
			: []),
	]

	return tags
}

export const iconLinks = [
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: 'icons/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: 'icons/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: 'icons/favicon-16x16.png',
	},
	{ rel: 'manifest', href: '/manifest.json', color: '#fffff' },
	{ rel: 'icon', href: 'icons/favicon.ico' },
]
