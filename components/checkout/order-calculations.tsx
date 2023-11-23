const OrderCalculations = () => {
	return (
		<div className='flex flex-col gap-1.5'>
			<div className='flex items-center justify-between'>
				<h3 className='text-base font-medium'>Subtotal</h3>
				<span className='text-base font-medium'>30.69</span>
			</div>
			<div className='flex items-center justify-between'>
				<h3 className='text-base font-medium'>Delivery Fee</h3>
				<span className='text-base font-medium'>1.50</span>
			</div>
			<div className='flex items-center justify-between'>
				<h3 className='text-base font-medium'>Discount</h3>
				<span className='text-base font-medium'>-5.00</span>
			</div>
		</div>
	)
}

export default OrderCalculations
