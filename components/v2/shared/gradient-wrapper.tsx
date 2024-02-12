import React from 'react'

type Props = { children: React.ReactNode }

export default function GradientWrapper({ children }: Props) {
	return (
		<section className='bg-gradient-to-b from-primary via-background to-background'>
			<div className='mx-auto max-w-[1327px] space-y-24'>{children}</div>
		</section>
	)
}
