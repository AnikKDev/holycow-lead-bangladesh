import { Button } from '../ui/button'

const CheckoutButton = () => {
	return (
		<div className='flex shrink-0 flex-col gap-2.5 border-t border-border pt-3'>
			<div className='flex items-center justify-between '>
				<h3 className='text-base font-semibold'>
					Total <span className='text-sm font-medium'>(tax incl.)</span>
				</h3>
				<h3 className='text-base font-bold'>27.09</h3>
			</div>
			<div className='w-full'>
				<Button
					size='lg'
					type='button'
					className=' w-full font-semibold uppercase'
					onClick={() => {}}
				>
					Place Order
				</Button>
			</div>
		</div>
	)
}

export default CheckoutButton
