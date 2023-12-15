import { Badge } from '../badge'

type Props = {
	status: string
}

export default function CustomBadge({ status }: Props) {
	return (
		<Badge
			className='whitespace-nowrap text-xs'
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
