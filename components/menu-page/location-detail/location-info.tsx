import Image from 'next/image'
import mapImg from '@/public/map.png'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import { HiMail } from 'react-icons/hi'
import { MdCall, MdOutlineLocationOn } from 'react-icons/md'

const LocationInfo = ({
	locationInformation,
}: {
	locationInformation: LocationInfoType
}) => {
	return (
		<div className='flex flex-col gap-2.5'>
			<h2 className='pb-2 text-lg font-semibold'>Where to find us</h2>
			<div>
				<Image src={mapImg} alt='Map' className='object-fit h-auto w-full' />
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<MdOutlineLocationOn size={18} />
					<p>{locationInformation?.address}</p>
				</div>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<MdCall size={18} />
					<p>{locationInformation?.phone_number}</p>
				</div>
				<div className='flex items-center gap-2 border-b border-border py-4'>
					<HiMail size={18} />
					<p>{locationInformation?.email}</p>
				</div>
			</div>
		</div>
	)
}

export default LocationInfo
