// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'

// import required modules
import { TakeawayMenuItem } from '@/types'
import { Autoplay, FreeMode, Scrollbar } from 'swiper/modules'

import MenuFoodCard from '../../shared/card/MenuFoodCard'

export default function SpecialtyListCarousel({
	allData,
}: {
	allData: TakeawayMenuItem[]
}) {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				scrollbar={{
					hide: true,
					horizontalClass: 'mt-2',
				}}
				modules={[Scrollbar, FreeMode, Autoplay]}
				className='h-full w-full'
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
			>
				{allData?.map((item) => {
					return (
						<SwiperSlide>
							<MenuFoodCard
								id={item.id}
								description={item.description}
								image={item.image}
								item_name={item.item_name}
								price={item.price}
							/>
						</SwiperSlide>
					)
				})}
				{/*
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 1
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 2
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 3
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 4
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 5
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 6
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 7
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 8
				</SwiperSlide>
				<SwiperSlide className='bg-blue flex items-center justify-center text-center text-base'>
					Slide 9
				</SwiperSlide> */}
			</Swiper>
		</>
	)
}
