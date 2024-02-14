'use client'

import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import {
	getCartTotals,
	selectOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'
import { useAuthState } from '@/hooks/useAuthState'

import { Button } from '../ui/button'

const CheckoutButton = () => {
	const cartTotals = useAppSelector(getCartTotals)
	const orderState = useAppSelector(selectOrderState)
	const { auth } = useAuthState()
	const canPlaceOrder = () => {
		if (!orderState.cartItems.length) {
			toast.error('Please add item to your cart')
			return false
		} else if (orderState.fulfillment_type === 'Delivery') {
			if (!orderState.delivery_address?.address_name) {
				toast.error('Please add your delivery address')
				return false
			} else if (!orderState?.delivery_time) {
				toast.error('Please add delivery time')
				return false
			}
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
			price: parseFloat(item.price),
			quantity: parseFloat(item.quantity),
		}))
	}
	const makePayment = async (body) => {
		try {
			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${auth.access}`,
			}
			const response = await fetch(`${apiUrl}/order/checkout/`, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(body),
			})

			const data = await response.json()
			window.location.href = data.url
		} catch (error) {
			console.error('Error fetching client secret:', error)
		}
	}

	const handlePlaceOrder = () => {
		if (!canPlaceOrder()) {
			return
		}
		const cardItems = orderItems(orderState.cartItems)
		const subtotal = cardItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2)
		const deliveryFee = orderState.delivery_charge
			? orderState.delivery_charge.toFixed(2)
			: '0'

		const tax = 15.0
		const discount = orderState.discount || 0.0
		const total = (
			parseFloat(subtotal) +
			parseFloat(deliveryFee) -
			discount +
			tax
		).toFixed(2)
		makePayment({
			order_items: cardItems,
			order_type: orderState.fulfillment_type.toUpperCase(),
			subtotal: subtotal,
			discount: discount,
			delivery_fee: deliveryFee,
			tax: tax,
			total: total,
			address: orderState.delivery_address.id,
			promo_code: 1,
		})
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
					size='lg'
					type='button'
					className=' w-full font-semibold uppercase'
					onClick={() => {
						handlePlaceOrder()
					}}
				>
					Place Order
				</Button>
			</div>
		</div>
	)
}

export default CheckoutButton
