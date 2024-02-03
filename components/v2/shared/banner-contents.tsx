import React from 'react'
import bg from '@/assets/private-info/private-info-bg.png'

type Props = { text: string }

export default function BannerContents({ text }: Props) {
	return (
		<div className='mx-auto h-[480px] max-w-[1792px] '>
			<div
				style={{
					background: `url(${bg.src}) `,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				className='h-full w-full overflow-hidden bg-no-repeat'
			>
				<div className='flex h-full w-full items-center justify-center bg-gradient-to-b from-[#0B0600]/70 to-[#4D412F]/10 bg-cover bg-no-repeat'>
					<h4>{text}</h4>
				</div>
			</div>
		</div>
	)
}
