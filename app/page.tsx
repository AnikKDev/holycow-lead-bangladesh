import React from 'react'

import AwardsRecognition from '@/components/v2/home-components/awards/AwardsRecognition'
import Header from '@/components/v2/home-components/header/Header'
import HollyChef from '@/components/v2/home-components/holly-chef/HollyChef'
import PhotoGallery from '@/components/v2/home-components/photo_gallery/PhotoGallery'
import Specialty from '@/components/v2/home-components/specialty/Specialty'
import Testimonial from '@/components/v2/home-components/testimonial/Testimonial'
import WonderfulRestaurant from '@/components/v2/home-components/wonderful-restaurant/WonderfulRestaurant'
import TakeawayLocations from '@/components/v2/shared/takeaway-locations/TakeawayLocations'
import VideoPlayer from '@/components/v2/shared/VideoPlayer'

type Props = {}

export default function AboutUs({}: Props) {
	return (
		<>
			<Header />
			<div className='mx-auto max-w-5xl'>
				<WonderfulRestaurant />
				<HollyChef />
				<Specialty />
				<TakeawayLocations />
				<AwardsRecognition />
			</div>
			<VideoPlayer />
			<PhotoGallery />
			<div className='mx-auto max-w-5xl'>
				<Testimonial />
			</div>
		</>
	)
}
