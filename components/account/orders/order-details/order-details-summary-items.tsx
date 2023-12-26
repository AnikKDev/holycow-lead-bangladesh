import Image from 'next/image'
import itemImg from '@/public/menu-item.jpg'

type Props = {}

export default function OrderDetailsSummaryItems({}: Props) {
	return (
		<div className='flex items-start justify-between'>
			<div className='flex gap-5'>
				<Image
					src={itemImg}
					alt='Cart product'
					className='h-14 w-14 rounded-sm object-cover'
				/>
				<div className='flex flex-col gap-1'>
					<h1 className='text-base font-medium'>VEGETABLE PAKORA</h1>
					<p className='text-sm font-medium text-[#767676]'>Quantity: 1</p>
				</div>
			</div>

			<div className='flex items-center justify-between'>
				<span className='text-base font-medium'>£10.69</span>
			</div>
		</div>
	)
}
