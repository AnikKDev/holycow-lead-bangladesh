import Image from 'next/image'
import { TakeawayMenuItem } from '@/types'

const MenuFoodCard = ({
	image,
	item_name,
	price,
	description,
}: TakeawayMenuItem) => {
	return (
		<article className='max-w-[308px]'>
			<Image
				src={image ? image : 'http://via.placeholder.com/308x300'}
				width={308}
				height={300}
				alt={item_name}
				className='border border-[#e8d3a233]'
			/>
			<div className='mt-[29px] flex items-center justify-between font-lora text-xl font-medium leading-[1.3] tracking-[0.04em] text-primary'>
				<h3>{item_name}</h3>
				<p className='flex items-center font-semibold'>£{price}</p>
			</div>
			<hr className='mb-[10px] mt-[6px] border-t border-dotted' />
			<p className='font-open_sans text-sm font-normal leading-[1.7] text-primary-foreground'>
				{description}
			</p>
		</article>
	)
}

export default MenuFoodCard
