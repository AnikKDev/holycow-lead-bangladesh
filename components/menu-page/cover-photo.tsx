import Image from 'next/image'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { apiUrl } from '@/lib/constatns'

type LocationInfoProps = {
	locationInformation?: LocationInfoType
}

const CoverPhoto = ({ locationInformation }: LocationInfoProps) => {
	return (
		<div className='container'>
			<div className=''>
				<Image
					src={`${apiUrl}${locationInformation.cover}`}
					alt='Cover Photo'
					className='h-[200px] w-full object-cover'
					height={200}
					width={1000}
				/>
			</div>
		</div>
	)
}

export default CoverPhoto
