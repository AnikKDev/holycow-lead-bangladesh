import { GoHome } from 'react-icons/go'

import { Button } from '@/components/ui/button'

const DeliveryAddressArea = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<GoHome size={22} className='text-black' />
				<div>
					<h3 className='text-base font-medium'>Add your address</h3>
				</div>
			</div>
			<div>
				<Button className='rounded-full px-5' size='sm'>
					Add
				</Button>
			</div>
		</div>
	)
}

export default DeliveryAddressArea
