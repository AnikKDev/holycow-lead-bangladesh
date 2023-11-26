import Image from 'next/image'
import mapImg from '@/public/map.png'
import { HiMail } from 'react-icons/hi'
import { MdCall, MdOutlineLocationOn } from 'react-icons/md'

const LocationInfo = () => {
	return (
		<div className='flex flex-col gap-2.5'>
			<h2 className='pb-2 text-lg font-semibold'>Where to find us</h2>
			<div>
				<Image src={mapImg} alt='Map' className='object-fit h-auto w-full' />
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<MdOutlineLocationOn size={18} />
					<p>87 Junction Road Archway London N19 5QU</p>
				</div>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<MdCall size={18} />
					<p>+44 20 72637007</p>
				</div>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<HiMail size={18} />
					<p>info@holycowonline.com</p>
				</div>
			</div>
		</div>
	)
}

export default LocationInfo
