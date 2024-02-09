import React from 'react'

import { cn } from '@/lib/utils'
import AwardsRecognition from '@/components/v2/home-components/awards/AwardsRecognition'
import GrabNGo from '@/components/v2/home-components/grab_n_go/GrabNGo'
import Header from '@/components/v2/home-components/header/Header'
import HollyChef from '@/components/v2/home-components/holly-chef/HollyChef'
import PhotoGallery from '@/components/v2/home-components/photo_gallery/PhotoGallery'
import Testimonial from '@/components/v2/home-components/testimonial/Testimonial'
import WonderfulRestaurant from '@/components/v2/home-components/wonderful-restaurant/WonderfulRestaurant'
import VideoPlayer from '@/components/v2/shared/VideoPlayer'

import Specialty from '../../components/v2/home-components/specialty/Specialty'

type Props = {}

export default function AboutUs({}: Props) {
	return (
		<>
			<Header />
			{/* <WonderfulRestaurant />
			<HollyChef />
			<Specialty />
			<GrabNGo />
			<AwardsRecognition />
			<VideoPlayer />
			<PhotoGallery />
			<Testimonial /> */}
		</>
	)
}
