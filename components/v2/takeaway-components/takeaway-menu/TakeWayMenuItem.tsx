import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { px } from 'framer-motion'

type Props = {
	title: string
	img: string
	url: string
}

const TakeawayMenuItem = ({ title, img, url }: Props) => {
	return (
		<article className='flex flex-col'>
			<Image src={img} width={421} height={371} alt={title} />
			<Link
				className='v2-custom-button w-full bg-primary px-8 py-2 text-center font-lora text-xl font-semibold leading-[1.75]  tracking-[0.04em] text-foreground'
				href={url}
			>
				{title}
			</Link>
		</article>
	)
}

export default TakeawayMenuItem
