import { Button } from '@/components/ui/button'

import TableSelectedOptions from './selected-options'

const PaymentTab = () => {
	return (
		<div className='pb-8'>
			<TableSelectedOptions />

			<div className='mt-4 flex w-full flex-col gap-2.5'>
				<div className='flex h-11 w-full items-center justify-center whitespace-nowrap rounded-md bg-accent text-sm  font-medium text-accent-foreground'>
					Deposit Amount: £10.00
				</div>
				<Button size='lg'>Confirm Booking</Button>
			</div>
		</div>
	)
}

export default PaymentTab
