import React from 'react'
import { Lora } from 'next/font/google'

import { cn } from '@/lib/utils'
import AwardsRecognition from '@/components/v2/home-components/awards/AwardsRecognition'
import GrabNGo from '@/components/v2/home-components/grab_n_go/GrabNGo'

import Specialty from '../../components/v2/home-components/specialty/Specialty'

type Props = {}

const fontLora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lora',
	weight: ['400', '500', '600', '700'],
})

export default function AboutUs({}: Props) {
	return (
		<>
			<section className={cn(fontLora.variable)}>
				<div className='w-full text-lg leading-7'>
					<Specialty />
				</div>
			</section>
		</>
	)
}
