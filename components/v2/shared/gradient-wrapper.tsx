import React from 'react'

type Props = { children: React.ReactNode }

export default function GradientWrapper({ children }: Props) {
	return (
		<section className=''>
			{/* bg-gradient-to-b from-primary via-background to-background */}
			<div className='container space-y-10 mobile-md:space-x-5'>{children}</div>
		</section>
	)
}
