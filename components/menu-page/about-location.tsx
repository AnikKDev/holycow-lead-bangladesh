import { MdOutlineLocationOn, MdOutlineStar } from 'react-icons/md'

const AboutLocation = () => {
	return (
		<div className='container mb-1.5 flex flex-col gap-2 text-foreground'>
			<h1 className='mt-4 text-2xl font-bold'>Holycow - Archway</h1>
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
	)
}

export default AboutLocation
