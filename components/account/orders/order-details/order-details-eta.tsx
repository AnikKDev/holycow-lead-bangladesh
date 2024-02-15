import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'
import { format } from 'date-fns'
import { BsArrowRepeat } from 'react-icons/bs'
import { HiOutlineTruck } from 'react-icons/hi2'
import { TbFileInvoice } from 'react-icons/tb'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type Props = { order: OrderDetailType }

export default function OrderDetailsEstimation({ order }: Props) {
	return (
		<div className='flex flex-col gap-2.5'>
			<div className='flex items-center justify-between'>
				<h2 className='text-xl font-bold'>Order ID: {order?.tracking_id}</h2>
				{/* btns */}
				<div className='flex items-center space-x-3'>
					<Button variant='outline' className='flex items-center'>
						<TbFileInvoice className='me-1 text-xl' />{' '}
						<span className='text-base'>Invoice</span>
					</Button>
					<Button variant='default' className='flex items-center'>
						<BsArrowRepeat className='me-1 text-xl' />{' '}
						<span className='text-base'>Reorder</span>
					</Button>
				</div>
			</div>
			<div className='flex items-center space-x-4 text-base'>
				<h6 className='text-[#6B7280]'>
					Order date: {format(new Date(order?.order_date), 'MMM d, yyyy')}
				</h6>
				{/* separator */}
				<Separator
					orientation='vertical'
					className='h-5 border border-gray-400'
				/>
				<h6 className='flex items-center font-semibold'>
					<HiOutlineTruck className='text-xl' />{' '}
					<span className='mx-1 text-base'>
						Estimated delivery:{' '}
						{format(new Date(order?.order_date), 'MMM d, yyyy')}
					</span>
				</h6>
			</div>
		</div>
	)
}
