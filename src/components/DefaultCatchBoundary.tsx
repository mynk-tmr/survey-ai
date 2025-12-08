import type { ErrorComponentProps } from '@tanstack/react-router'
import {
	ErrorComponent,
	rootRouteId,
	useMatch,
	useRouter,
} from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
	const router = useRouter()
	const _isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	})
	const _tryAgain = () => router.invalidate()
	console.error('DefaultCatchBoundary Error:', error)

	return (
		<div>
			<ErrorComponent error={error} />
		</div>
	)
}
