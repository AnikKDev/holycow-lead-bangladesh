import { MdOutlineLocationOn, MdOutlineStar } from 'react-icons/md'

import BookATableBtn from './reservation/book-table-btn'

const AboutLocation = ({
	isRestaurant = false,
}: {
	isRestaurant?: boolean
}) => {
	return (
		<>
			<div className='container mb-1.5 mt-4 grid grid-cols-[1fr_auto] text-foreground'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-2xl font-bold'>Holycow - Archway</h1>
					<div className='flex flex-col justify-center gap-1'>
						<div className='flex items-center gap-1'>
							<MdOutlineStar size={18} />
							<h2 className='font-medium'>4.8 (100+ ratings) • Takeaway </h2>
						</div>
						<div className='flex items-center gap-1'>
							<MdOutlineLocationOn size={18} />
							<h2 className='font-medium'>
								87 Junction Road Archway London N19 5QU • 0207 837 3473
							</h2>
						</div>
					</div>
				</div>
				{isRestaurant && <BookATableBtn />}
			</div>
		</>
	)
}

export default AboutLocation
