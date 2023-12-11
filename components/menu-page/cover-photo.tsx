'use client'

import Image from 'next/image'
import menuCover from '@/public/menu-cover.jpg'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { apiUrl } from '@/lib/constatns'

type LocationInfoProps = {
	locationInformation?: LocationInfoType
}

const CoverPhoto = ({ locationInformation }: LocationInfoProps) => {
	console.log(locationInformation)
	return (
		<div className='container'>
			<div className='aspect-auto'>
				<Image
					priority
					src={
						locationInformation?.cover
							? `${apiUrl}${locationInformation.cover}`
							: menuCover
					}
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
