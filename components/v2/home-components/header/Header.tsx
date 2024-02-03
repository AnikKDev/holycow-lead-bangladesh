import React from 'react'

import DeliveryAndDine from './DeliveryAndDine'
import Hero from './Hero'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='bg-gradient-to-b from-[#E8D3A2] to-[#F3F2EB]'>
			<Hero />
			<DeliveryAndDine />
		</div>
	)
}

export default Header
