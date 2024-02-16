import React from 'react'

import DeliveryAndDine from './DeliveryAndDine'
import Hero from './Hero'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='bg-gradient-to-b from-primary to-background'>
			<Hero />
			<div className='mx-auto max-w-5xl'>
				<DeliveryAndDine />
			</div>
		</div>
	)
}

export default Header
