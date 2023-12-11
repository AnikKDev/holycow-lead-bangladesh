import React from 'react'
import Head from 'next/head'

import AboutUsCarousel from '@/components/about-us/about-use-carousel'

type Props = {}

export default function AboutUs({}: Props) {
	return (
		<section>
			<Head>
				<title>About Us - Holycow Fine Indian Restaurant</title>
			</Head>
			<header className='privacy-policy__header flex h-80 items-center justify-center bg-[#332d21] bg-cover bg-center bg-no-repeat py-4 text-center text-white bg-blend-overlay'>
				<h1 className='text-5xl font-bold text-primary'>About Us</h1>
			</header>
			{/*  */}
			<div className='container flex items-start justify-between space-x-11 py-8'>
				{/* carousel */}
				<AboutUsCarousel />
				{/* texts */}
				<div className='w-full text-lg leading-7 text-gray-500'>
					<p>
						What makes Holy Cow Fine Indian Food so special? Style, Quality,
						Creativity, Refinement, but above all Taste!
						<br />
						It’s because we take the finest quality, authentic, fresh
						ingredients. Our qualified, experienced chefs then creatively
						combine and balance the flavours to conjure up exquisite dishes, fit
						for a Maharajah.
						<br />
						<br />
						Everyone who knows and loves quality Indian food recognises the
						importance of well prepared, fresh ingredients. Yet here’s an added
						opportunity to experience a blend of new, inspired dishes that
						uniquely combine creativity with authenticity. Fresh meats and
						vegetables. Aromatic, piquant herbs & spices. No artificial
						colourings or preservatives. And all our dishes are served steaming
						hot into special stay-fresh packs, ready to collect, or be delivered
						to your door – within 45 minutes*
						<br />
						<br />
						If you want to design your own dish, we can do that too. A little
						creamier, a little hotter, a little more fenugreek? No problem. Just
						ask us and we’ll cook it to order at no extra cost. Special
						children’s meals? We’ve got those too! We want you to appreciate
						Indian food at its best, to see what can be done when you give the
						highest quality ingredients to the best Indian chefs.
						<br />
						<br />
						Make your takeaway a special occasion, with Holy Cow fine Indian
						food. It will be a dining experience you will remember.
					</p>
				</div>
			</div>
		</section>
	)
}
