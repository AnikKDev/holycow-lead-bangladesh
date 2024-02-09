import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

import SectionHeader from '@/components/v2/shared/SectionHeader'
import TakeawayMenu from '@/components/v2/takeaway-components/takeaway-menu/TakeawayMenu'

type Props = {}

export const metadata: Metadata = {
	title: 'Best Indian Takeaway Menu',
}

export default function AboutUs({}: Props) {
	return (
		<>
			<Head>
				<title>Best Indian Takeaway Menu | Holy Cow | Fine Indian Food</title>
			</Head>

			<div className='container'>
				<div className='mt-[176px]'>
					<SectionHeader
						title='take our fresh, delicious fare home for an unforgettable experience'
						subTitle='Grab-N-go'
						subTitleSize='medium'
					/>
					<hr className='my-24 border-t-[0.5px] border-dotted border-[#727272]' />
					<TakeawayMenu />
				</div>
			</div>
		</>
	)
}
