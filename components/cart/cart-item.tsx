import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

const CartItem = () => {
	return (
		<div className='grid grid-cols-4 items-center gap-4'>
			<div>
				<Image
					src={itemImg}
					alt='Cart product'
					className='h-14 w-14 rounded-sm object-cover'
				/>
			</div>
			<div>
				<div>
					<h1>VEGETABLE PAKORA</h1>
					<p>
						Seasonal vegetable mixed with fresh chopped ginger, garlic, spices.
						Deep fried...
					</p>
				</div>
				<div>
					<span>£10.69</span>
					<div>
						<Button
							variant='outline'
							className='border-none p-0 hover:bg-transparent hover:text-foreground'
						>
							<GoTrash className='h-[22px] w-[22px]' />
						</Button>
						<div>
							<Button
								variant='outline'
								className='border-none p-0 hover:bg-transparent hover:text-foreground'
							>
								<FiMinus className='h-[20px] w-[20px]' />
							</Button>
							<Input
								type='number'
								className='h-8 w-14 max-w-full bg-[#E9E2D2] px-0 py-0 text-center text-lg font-medium'
								id='quantity'
								defaultValue='1'
								min={1}
							/>
							<Button
								variant='outline'
								className='border-none p-0 hover:bg-transparent hover:text-foreground'
							>
								<FiPlus className='h-[20px] w-[20px]' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
