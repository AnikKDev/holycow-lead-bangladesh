import React from 'react'

type Props = { text: string; image: string }

export default function BannerContents({ text, image }: Props) {
	return (
		<div className='mx-auto h-[480px] max-w-[1792px] '>
			<div
				style={{
					background: `url(${image}) `,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				className='h-full w-full overflow-hidden bg-no-repeat'
			>
				<div className='flex h-full w-full items-center justify-center bg-gradient-to-b from-[#0B0600]/70 to-[#4D412F]/10 bg-cover bg-no-repeat'>
					<h1 className='text-center text-[64px] font-[600px] leading-[83.2px] tracking-[0.04em] text-[#DCCA87]'>
						{text}
					</h1>
				</div>
			</div>
		</div>
	)
}
