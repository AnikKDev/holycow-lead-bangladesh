import React from 'react'

type Props = { children: React.ReactNode }

export default function GradientWrapper({ children }: Props) {
	return (
		<section className='bg-gradient-to-b from-[#E8D3A2] via-[#F3F2EB] to-[#F3F2EB]'>
			<div className='mx-auto max-w-[1327px] space-y-24'>{children}</div>
		</section>
	)
}
