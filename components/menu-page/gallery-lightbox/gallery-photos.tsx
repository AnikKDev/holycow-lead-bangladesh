import { FC } from 'react'

import { GalleryImageItem } from './data'

interface ImagesProps {
	data: GalleryImageItem[]
	onClick: (index: number) => void
}

const GalleryPhotos: FC<ImagesProps> = (props) => {
	const { data, onClick } = props

	const handleClickImage = (index: number) => {
		onClick(index)
	}

	return (
		<div className='container my-7 flex flex-col gap-3'>
			<h1 className='mb-5 mt-2 text-center text-2xl font-bold'>Gallery</h1>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5'>
				{data.map((slide, index) => {
					return (
						<div
							onClick={() => handleClickImage(index)}
							key={slide.id}
							className='relative h-[200px] min-w-full cursor-pointer'
						>
							<img
								src={slide.src}
								alt={slide.description}
								// fill
								className='h-full w-full rounded-sm object-cover'
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default GalleryPhotos
