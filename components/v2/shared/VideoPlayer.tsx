'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import VideoImage from '@/assets/v2/home-page/video-front.png'

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
		<section className='relative mt-[144px] h-[763px]'>
			<div
				className='relative flex h-full w-full items-center justify-center border border-[#e8d3a2]'
				onClick={handleShowVideo}
			>
				<video id='videoElement' className='h-full w-full' controls>
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

					<svg
						className='absolute z-30'
						width='120'
						height='120'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='60' cy='60' r='59.5' stroke='#E8D3A2' />
						<path d='M76 61.5 52 76V47l24 14.5z' fill='#fff' />
					</svg>
				</div>
			</div>
		</section>
	)
}

export default VideoPlayer
