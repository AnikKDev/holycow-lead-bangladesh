import { useState } from 'react'
import { GoHome } from 'react-icons/go'

import { Button } from '@/components/ui/button'

const DeliveryAddressArea = () => {
	const [isSelected, setIsSelected] = useState(false)
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<GoHome
					size={22}
					className='text-black'
					onClick={() => setIsSelected(!isSelected)}
				/>
				<div>
					{isSelected ? (
						<div>
							<h3 className='text-base font-medium'>
								Home
								<br />
								London N6 5BA, UK
							</h3>
						</div>
					) : (
						<h3 className='text-base font-medium'>Add your address</h3>
					)}
				</div>
			</div>
			<div>
				<Button className='h-7 rounded-full px-5' size='sm'>
					Add
				</Button>
			</div>
		</div>
	)
}

export default DeliveryAddressArea
