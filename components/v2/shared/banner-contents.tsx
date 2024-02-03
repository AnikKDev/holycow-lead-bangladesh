import React from 'react'

type Props = { text: string }

export default function BannerContents({ text }: Props) {
	return (
		<div>
			<h1 className='text-5xl font-bold capitalize text-background'>{text}</h1>
			{/* breadcrumb */}
			<div className='my-6 flex items-center justify-center'>
				<h6>Home</h6>
				<span>{' > '}</span>
				<h6>{text}</h6>
			</div>
		</div>
	)
}
