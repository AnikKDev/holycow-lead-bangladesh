'use client'

import { useAppSelector } from '@/redux/hooks'
import { selectOrderState } from '@/redux/slices/orderSlice/orderSlice'

import CheckoutButton from './checkout-button'
import CollectionAddressSection from './collection/collection-address'
import CollectionTimeSection from './collection/collection-time'
import DeliveryAddressArea from './delivery/delivery-address'
import DeliveryTab from './delivery/delivery-tab'
import DeliveryTimeArea from './delivery/delivery-time'
import OrderCalculations from './order-calculations'
import PromoCodeApply from './promo-code'

const CheckoutRightSide = () => {
	const orderState = useAppSelector(selectOrderState)
	return (
		<div className='flex h-full flex-col flex-nowrap pb-4 pt-6'>
			<div className='flex min-h-fit grow-[1] flex-col space-y-[14px] overflow-y-auto'>
				<DeliveryTab />
				{orderState.fulfillment_type === 'Delivery' ? (
					<>
						<DeliveryAddressArea />
						<div className='border-b border-border'></div>
						<DeliveryTimeArea />
						<div className='border-b border-border'></div>
					</>
				) : (
					orderState.fulfillment_type === 'Collection' && (
						<>
							<CollectionAddressSection />
							<div className='border-b border-border'></div>

							<CollectionTimeSection />
							<div className='border-b border-border'></div>
						</>
					)
				)}
				<PromoCodeApply />
				<div className='border-b border-border'></div>

				<OrderCalculations />
			</div>

			<CheckoutButton />
		</div>
	)
}

export default CheckoutRightSide
