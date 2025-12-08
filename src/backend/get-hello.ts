import { env } from 'cloudflare:workers'
import { createServerFn } from '@tanstack/react-start'

export const getHello = createServerFn().handler(() => {
	return {
		message: `This ran in ${navigator.userAgent} @ ${new Date().toLocaleTimeString()}`,
		myVar: env.MY_VAR,
	}
})
