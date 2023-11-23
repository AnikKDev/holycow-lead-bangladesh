'use client'

import { useState } from 'react'

import CheckoutButton from './checkout-button'
import CollectionAddressSection from './collection/collection-address'
import CollectionTimeSection from './collection/collection-time'
import DeliveryAddressArea from './delivery/delivery-address'
import DeliveryTab from './delivery/delivery-tab'
import DeliveryTimeArea from './delivery/delivery-time'
import OrderCalculations from './order-calculations'
import PromoCodeApply from './promo-code'

const CheckoutRightSide = () => {
	const [currentTab, setCurrentTab] = useState('delivery')
	return (
		<div className='pt-6'>
			<div>
				<DeliveryTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
				{currentTab === 'delivery' ? (
					<>
						<DeliveryAddressArea />
						<DeliveryTimeArea />
					</>
				) : (
					currentTab === 'collection' && (
						<>
							<CollectionAddressSection />
							<CollectionTimeSection />
						</>
					)
				)}
				<PromoCodeApply />
				<OrderCalculations />
			</div>

			<CheckoutButton />
		</div>
	)
}

export default CheckoutRightSide
