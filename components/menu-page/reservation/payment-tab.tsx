import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import TableSelectedOptions from './selected-options'

const PaymentTab = () => {
	return (
		<div className='pb-8'>
			<TableSelectedOptions />

			<div className='mt-4 flex w-full flex-col gap-2.5'>
				<div className='h-11 text-left text-sm font-medium text-foreground'>
					Deposit Amount: {formatPrice(10)}
				</div>
				<Button size='lg'>Pay Deposit & Confirm Booking</Button>
			</div>
		</div>
	)
}

export default PaymentTab
