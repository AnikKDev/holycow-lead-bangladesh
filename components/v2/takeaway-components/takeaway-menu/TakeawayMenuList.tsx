import React from 'react'

import TakeawayMenuItem from './TakeWayMenuItem'

type Props = {
	takeawayMenuItems: {
		title: string
		img: string
		url: string
	}[]
}

const TakeWayMenuList = ({ takeawayMenuItems }: Props) => {
	return (
		<div className='lg:grid-cols-4 mb-36 grid grid-cols-1 gap-4 md:grid-cols-2 _desktop-sm:grid-cols-3 _desktop-md:grid-cols-4 _desktop-md:gap-8'>
			{takeawayMenuItems.map((item, index) => (
				<TakeawayMenuItem
					key={index}
					title={item.title}
					img={item.img}
					url={item.url}
				/>
			))}
		</div>
	)
}

export default TakeWayMenuList
