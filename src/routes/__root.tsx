/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { cssLinks } from '~/styles/+links'
import { iconLinks, seo } from '~/utils/seo'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			...seo({
				title: 'TanStack + Cloudfare',
				description: `Created by Mayank Tomar`,
			}),
		],
		links: [...cssLinks, ...iconLinks],
	}),
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackRouterDevtools position="bottom-right" />
				<Scripts />
			</body>
		</html>
	)
}
