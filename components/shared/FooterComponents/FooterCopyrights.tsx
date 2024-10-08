'use client'

import React from 'react'

type Props = {}

export default function FooterCopyrights({}: Props) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // This enables the smooth scrolling effect
		})
	}
	return (
		<div className='bg-[#0C0B08] p-3 text-center'>
			{/* cr parts */}
			<span className='text-sm text-[#E8D3A2]'>
				© {new Date().getFullYear()} — Copyright Holy Cow - Fine Indian Food.
				All Rights Reserved.
			</span>
		</div>
	)
}
