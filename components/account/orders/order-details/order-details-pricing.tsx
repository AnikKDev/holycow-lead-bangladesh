import { formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

type Props = {}

export default function OrderDetailsPricing({}: Props) {
	return (
		<div>
			<div className='my-6 flex flex-col gap-1.5 gap-y-4'>
				<div className='flex items-center justify-between'>
					<h3 className='text-xl font-medium text-gray-500'>Subtotal</h3>
					<span className=' text-xl font-medium'>{formatPrice(30.69)}</span>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='text-xl font-medium text-gray-500'>Delivery Fee</h3>
					<span className=' text-xl font-medium'>{formatPrice(1.5)}</span>
				</div>
				<div className='flex items-center justify-between'>
					<h3 className='text-xl font-medium text-gray-500'>Discount</h3>
					<span className=' text-xl font-medium'>- {formatPrice(5.0)}</span>
				</div>
			</div>
			<Separator orientation='horizontal' />
			<div className='mt-4 flex items-center justify-between'>
				<h3 className='text-2xl font-medium text-gray-500'>
					Total (tax incl.)
				</h3>
				<span className=' text-2xl font-bold'>{formatPrice(5)}</span>
			</div>
		</div>
	)
}
