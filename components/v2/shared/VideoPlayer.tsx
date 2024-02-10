'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import VideoImage from '@/assets/v2/home-page/video-front.png'
import { MdPlayArrow } from 'react-icons/md'

import { cn } from '@/lib/utils'

type Props = {}

const VideoPlayer = (props: Props) => {
	const [showVideo, setShowVideo] = useState(false)
	useEffect(() => {
		const videoElement = document.getElementById(
			'videoElement'
		) as HTMLVideoElement

		if (videoElement && showVideo) {
			videoElement.play()
		}
	}, [showVideo])

	const handleShowVideo = () => {
		setShowVideo(!showVideo)
	}

	return (
		<section className='relative max-h-[520px]'>
			<div
				className='max-h-[520px]cursor-pointer relative flex items-center justify-center border border-primary'
				onClick={handleShowVideo}
			>
				<video id='videoElement' className='max-h-[520px]' controls>
					<source
						src='https://docs.material-tailwind.com/demo.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
				<div
					className={cn(
						'absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center',
						showVideo && `hidden`
					)}
				>
					<Image
						className='h-full w-full'
						src={VideoImage}
						alt='video image'
						width={0}
						height={0}
					/>
					<span className='absolute bottom-0 left-0 right-0 top-0 z-20 bg-[#0b0b0b] opacity-40' />
					<span className='absolute z-30 flex h-20 w-20 items-center justify-center rounded-full border border-background md:h-28 md:w-28'>
						<MdPlayArrow className='relative text-4xl text-6xl' />
					</span>
				</div>
			</div>
		</section>
	)
}

export default VideoPlayer
