import { useDroppable } from '@dnd-kit/core'

export const Droppable = ({
	children,
	id,
	accepts,
}: {
	children: React.ReactNode
	id: string
	accepts: string
}) => {
	const { setNodeRef } = useDroppable({ id, data: { accepts } })

	return <div ref={setNodeRef}>{children}</div>
}
