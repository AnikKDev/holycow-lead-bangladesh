import React from 'react'

import { Badge } from '../badge'

type Props = {
	status: string
}

export default function CustomBadge({ status }: Props) {
	return (
		<Badge
			variant={
				status === 'In Progress'
					? 'inProgress'
					: status === 'Completed'
					  ? 'completed'
					  : 'cancelled'
			}
		>
			{status}
		</Badge>
	)
}
