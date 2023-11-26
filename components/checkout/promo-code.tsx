import { useState } from 'react'
import { IoPricetagOutline } from 'react-icons/io5'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const PromoCodeApply = () => {
	const [isApplied, setIsApplied] = useState(false)
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsApplied(true)
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='grid grid-cols-[auto,1fr] items-start justify-start gap-2.5'>
				<div>
					<IoPricetagOutline size={22} className='text-foreground' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex content-start items-center justify-between'>
						<h3 className='text-base font-medium'>Promo Code</h3>
						{isApplied && (
							<Button
								variant='link'
								size='sm'
								className='h-fit text-foreground'
								onClick={() => {
									setIsApplied(false)
								}}
							>
								Remove
							</Button>
						)}
					</div>

					{!isApplied ? (
						<div className='flex w-full items-center space-x-2'>
							<Input placeholder='Enter promo code' className='bg-white' />
							<Button type='submit'>Apply</Button>
						</div>
					) : (
						<div className=''>
							<Badge variant='outline' className='h-[40px] px-4 py-2 text-sm'>
								Applied "SAVE5"
							</Badge>
						</div>
					)}
				</div>
			</div>
		</form>
	)
}

export default PromoCodeApply
