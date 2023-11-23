import { IoPricetagOutline } from 'react-icons/io5'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

const PromoCodeApply = () => {
	return (
		<form>
			<div className='grid grid-cols-[auto,1fr] gap-2.5'>
				<div>
					<IoPricetagOutline size={22} className='text-foreground' />
				</div>
				<div className='flex flex-col gap-2'>
					<h3 className='text-base font-medium'>Promo Code</h3>
					<div className='flex w-full items-center space-x-2'>
						<Input placeholder='Enter promo code' className='bg-white' />
						<Button type='submit'>Apply</Button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default PromoCodeApply
