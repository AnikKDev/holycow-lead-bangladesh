import { useMemo } from 'react'
import { useParams } from 'next/navigation'

const useRoom = () => {
	const params = useParams()

	const roomId = useMemo(() => {
		if (!params?.roomId) {
			return ''
		}

		return params.roomId as string
	}, [params?.roomId])

	const isOpen = useMemo(() => !!roomId, [roomId])

	return useMemo(
		() => ({
			isOpen,
			roomId,
		}),
		[isOpen, roomId]
	)
}

export default useRoom
