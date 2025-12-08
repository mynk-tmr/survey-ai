import { createFileRoute, useRouter } from '@tanstack/react-router'
import { getHello } from '~/backend/get-hello'

export const Route = createFileRoute('/')({
	loader: async () => {
		console.log(`LOG: ${typeof window !== 'undefined' ? 'browser' : 'server'} `)
		return await getHello()
	},
	component: Home,
})

function Home() {
	const data = Route.useLoaderData()
	const { invalidate } = useRouter()
	return (
		<div className="grid h-screen place-content-center gap-4">
			<h3 className="text-5xl font-bold">Welcome Home!!!</h3>
			<p className="text-green-500">{data.message}</p>
			<p className="text-blue-500">{data.myVar}</p>
			<p className="italic">See console.log for logs</p>
			<button
				onClick={() => {
					invalidate()
				}}
				type="button"
				className="p-2 rounded bg-white cursor-pointer active:scale-95 text-black"
			>
				Try again
			</button>
		</div>
	)
}
