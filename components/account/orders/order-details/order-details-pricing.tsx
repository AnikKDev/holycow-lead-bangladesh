import { OrderDetailType } from '@/redux/slices/orderSlice/orderSlice'

import { formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

type Props = { order: OrderDetailType }

export default function OrderDetailsPricing({ order }: Props) {
	return (
		<div>
			<div className='flex flex-col gap-1.5 gap-y-4'>
				<div className='flex items-center justify-between'>
					<h3 className='text-base font-medium text-gray-500'>Subtotal</h3>
					<span className=' text-base font-medium'>
						{formatPrice(order.subtotal)}
					</span>
				</div>
				{!!order?.delivery_fee && (
					<div className='flex items-center justify-between'>
						<h3 className='text-base font-medium text-gray-500'>
							Delivery Fee
						</h3>
						<span className=' text-base font-medium'>
							{formatPrice(order.delivery_fee)}
						</span>
					</div>
				)}
				{!!order?.discount && (
					<div className='flex items-center justify-between'>
						<h3 className='text-base font-medium text-gray-500'>Discount</h3>
						<span className=' text-base font-medium'>
							- {formatPrice(order.discount)}
						</span>
					</div>
				)}
			</div>
			<Separator orientation='horizontal' className='my-3' />
			<div className=' flex items-center justify-between'>
				<h3 className='0 text-lg font-medium'>Total (tax incl.)</h3>
				<span className=' text-lg font-bold'>{formatPrice(order.total)}</span>
			</div>
		</div>
	)
}
