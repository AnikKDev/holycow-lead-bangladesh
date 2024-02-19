import { ORDER_STATUS } from '@/redux/slices/orderSlice/orderSlice'

import { Badge } from '../badge'

type Props = {
	status: ORDER_STATUS
}

export default function CustomBadge({ status }: Props) {
	return (
		<Badge
			className='whitespace-nowrap border-primary bg-transparent text-[13px] font-medium text-foreground'
			variant={
				status === 'PENDING' || status === 'PREPARING'
					? 'inProgress'
					: status === 'ACCEPTED' || status === 'DISPATCHED'
					  ? 'completed'
					  : status === 'DELIVERED'
					    ? 'default'
					    : 'cancelled'
			}
		>
			{status || 'Unknown'}
		</Badge>
	)
}
