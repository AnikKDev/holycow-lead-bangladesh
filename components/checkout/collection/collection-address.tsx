import { AiOutlineShop } from 'react-icons/ai'

const CollectionAddressSection = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<AiOutlineShop size={22} className='text-foreground' />
				<div>
					<h3 className='text-base font-medium'>
						87 Junction Road Archway London N19 5QU
					</h3>
				</div>
			</div>
		</div>
	)
}

export default CollectionAddressSection
