'use client'

import { useParams, usePathname } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'
import { useLazyGetTakeawayInformationQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import {
	useCheckoutOrderMutation,
	usePerformGuestCheckoutMutation,
} from '@/redux/slices/orderSlice/orderApislice'
import {
	getCartTotals,
	selectOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

import { ASAP } from '@/lib/constatns'
import { formatPrice, hasAllValues } from '@/lib/utils'
import { useAuthState } from '@/hooks/useAuthState'

import { Button } from '../ui/button'

const CheckoutButton = ({
	isGuestCheckout = false,
}: {
	isGuestCheckout?: boolean
}) => {
	const pathname = usePathname()
	const cartTotals = useAppSelector(getCartTotals)
	const orderState = useAppSelector(selectOrderState)
	const params = useParams()
	const location = params.location as string
	const { auth } = useAuthState()
	const [handleCheckoutOrder, { isLoading, isError }] =
		useCheckoutOrderMutation()
	const [handleGuestCheckout, { isLoading: guestIsLoading }] =
		usePerformGuestCheckoutMutation()
	const [getTakeawayInfo, { isLoading: takeawayIsLoading }] =
		useLazyGetTakeawayInformationQuery()

	const canPlaceOrder = () => {
		if (!orderState.cartItems.length) {
			toast.error('Please add item to your cart')
			return false
		} else if (orderState.fulfillment_type === 'Delivery' && !isGuestCheckout) {
			if (!orderState.delivery_address?.address_name) {
				toast.error('Please add your delivery address')
				return false
			} else if (!orderState?.delivery_time) {
				toast.error('Please add delivery time')
				return false
			}
		} else if (isGuestCheckout && !hasAllValues(orderState.guest_info)) {
			console.log(orderState)
			toast.error('Please add your information and address')
			return false
		} else if (
			orderState.fulfillment_type === 'Collection' &&
			!orderState?.collection_time
		) {
			toast.error('Please add collection time')
			return false
		}
		return true
	}

	// generate checkout layout
	const orderItems = (cartItems) => {
		return cartItems.map((item) => ({
			menu_item: item.id,
			// price: parseFloat(item.price),
			quantity: parseFloat(item.quantity),
		}))
	}
	const makePayment = async (body) => {
		try {
			const res = await handleCheckoutOrder(body).unwrap()
			const { url } = res

			window.localStorage.setItem('is_order_succeed', JSON.stringify(true))
			window.location.href = url
		} catch (error) {
			console.error('Error fetching client secret:', error)
			toast.error('Something went wrong!')
		}
	}

	const makeGuestCheckoutPayment = async (body) => {
		try {
			const res = await handleGuestCheckout(body).unwrap()
			const { url } = res

			window.localStorage.setItem('is_order_succeed', JSON.stringify(true))
			window.location.href = url
		} catch (error) {
			console.error('Error fetching client secret:', error)
			toast.error('Something went wrong!')
		}
	}

	const getTakeawayLocationInfo = async () => {
		try {
			const data = await getTakeawayInfo(location).unwrap()
			return data.name
		} catch (e) {
			console.error(e)
		}
	}

	const handlePlaceOrder = async () => {
		if (!canPlaceOrder()) {
			return
		}
		const cartItems = orderItems(orderState.cartItems)
		const takeawayName = await getTakeawayLocationInfo()

		if (isGuestCheckout && pathname.includes('/guest-checkout')) {
			const guestInfo = { ...orderState.guest_info }
			guestInfo.address = `${guestInfo.address}, ${guestInfo.post_code}`
			delete guestInfo.post_code
			makeGuestCheckoutPayment({
				order_info: {
					order_items: cartItems,
					order_type: orderState.fulfillment_type.toUpperCase(),
					collection_time:
						orderState.fulfillment_type === 'Delivery'
							? orderState?.delivery_time === ASAP
								? null
								: orderState?.delivery_time
							: orderState?.collection_time === ASAP
							  ? null
							  : orderState?.collection_time, // both for delivery_time and collection_time
					takeaway: takeawayName.toLowerCase() || 'putney',
				},
				guest_info: guestInfo,
			})
		} else {
			makePayment({
				order_items: cartItems,
				order_type: orderState.fulfillment_type.toUpperCase(),
				collection_time:
					orderState.fulfillment_type === 'Delivery'
						? orderState?.delivery_time === ASAP
							? null
							: orderState?.delivery_time
						: orderState?.collection_time === ASAP
						  ? null
						  : orderState?.collection_time, // both for delivery_time and collection_time
				address: orderState.delivery_address.id,
				promo_code: orderState?.promo_code_id,
				takeaway: takeawayName?.toLowerCase() || 'putney',
			})
		}
	}

	return (
		<div className='flex shrink-0 flex-col gap-2.5 border-t border-border pt-3 mobile-md:container mobile-md:pb-2.5'>
			<div className='flex items-center justify-between '>
				<h3 className='text-base font-semibold'>
					Total <span className='text-sm font-medium'>(tax incl.)</span>
				</h3>
				<h3 className='text-base font-bold'>
					{formatPrice(cartTotals.totalPrice)}
				</h3>
			</div>
			<div className='w-full'>
				<Button
					disabled={isLoading || guestIsLoading || takeawayIsLoading}
					size='lg'
					type='button'
					className=' w-full font-semibold uppercase'
					onClick={() => {
						handlePlaceOrder()
					}}
				>
					{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					Place Order {isGuestCheckout && 'as Guest'}
				</Button>
			</div>
		</div>
	)
}

export default CheckoutButton
