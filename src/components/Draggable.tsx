import { useDraggable } from '@dnd-kit/core'
import {} from '@dnd-kit/core'

export const Draggable = ({
	children,
	id,
	type,
}: {
	children: React.ReactNode
	id: string
	type: string
}) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id,
		data: { type },
	})

	return (
		<div ref={setNodeRef} {...listeners} {...attributes}>
			{children}
		</div>
	)
}
