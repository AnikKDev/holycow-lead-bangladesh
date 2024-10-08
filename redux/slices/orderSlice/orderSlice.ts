import { RootState } from '@/redux/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AccountAddress } from '@/types/account/account.types'
import { ASAP, DELIVERY_CHARGE, TAX_RATE } from '@/lib/constatns'
import { decimalFormatter } from '@/lib/formatter'
import { Extend } from '@/lib/utils'

import { MenuItemType } from '../menuPageSlice/menuPageSlice'

export type FulfillmentType = 'Delivery' | 'Collection'

export const guestInfoInitialState = {
	name: '',
	email: '',
	phone_number: '',
	address: '',
	post_code: '',
}
export type GuestInfo = Extend<Partial<typeof guestInfoInitialState>>
export type OrderInitialState = Extend<
	Partial<{
		cartItems: MenuItemType[]
		discount: number
		promo_code: string
		promo_code_id: null | number
		delivery_charge: number
		fulfillment_type: FulfillmentType
		delivery_address: AccountAddress
		delivery_time: string
		collection_address: string
		collection_time: string
		visited_location_slug: string
		// guest
		guest_info: GuestInfo
	}>
>

export type ORDER_STATUS =
	| 'PENDING'
	| 'ACCEPTED'
	| 'PREPARING'
	| 'DISPATCHED'
	| 'DELIVERED'

export type OrderDetailType = Extend<
	Partial<{
		id: number
		tracking_id: string
		order_date: string
		status: ORDER_STATUS
		order_items: MenuItemType[]
		subtotal: number | string
		delivery_fee: number | string
		discount: number | string
		total: number | string
		address: AccountAddress
		order_type: 'DELIVERY' | 'COLLECTION'
		collection_address: 'string'
	}>
>

export const orderInitialState: OrderInitialState = {
	cartItems: [],
	discount: null,
	promo_code: '',
	promo_code_id: null,
	delivery_charge: DELIVERY_CHARGE,
	fulfillment_type: 'Delivery',
	delivery_address: {},
	delivery_time: ASAP,
	collection_address: '',
	collection_time: ASAP,
	visited_location_slug: '',
	guest_info: { ...guestInfoInitialState },
}

const orderSlice = createSlice({
	name: 'order',
	initialState: orderInitialState,
	reducers: {
		setOrderState: (state, action: PayloadAction<OrderInitialState>) =>
			action.payload,
		setOrderDiscount: (state, action: PayloadAction<number>) => {
			state.discount = action.payload
		},
		setVisitedLocationSlug: (state, action: PayloadAction<string>) => {
			state.visited_location_slug = action.payload
		},
		changeCartItemQuantityByInput: (
			state,
			action: PayloadAction<MenuItemType>
		) => {
			const existingIndex = state.cartItems.findIndex(
				(prod) => prod.id == action.payload.id
			)
			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					quantity: action.payload.quantity,
				}
			}
		},
		addItemToCart: (state, action: PayloadAction<MenuItemType>) => {
			const existingIndex = state.cartItems.findIndex(
				(prod) => prod.id == action.payload.id
			)

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					quantity:
						state.cartItems[existingIndex].quantity + action.payload.quantity,
				}
			} else {
				const newCartItem = {
					...action.payload,
					quantity: action.payload.quantity,
				}
				state.cartItems.push(newCartItem)
			}
		},
		increaseItemQuantity: (state, action: PayloadAction<MenuItemType>) => {
			const existingIndex = state.cartItems.findIndex(
				(prod) => prod.id == action.payload.id
			)

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					quantity: state.cartItems[existingIndex].quantity + 1,
				}
			} else {
				const newCartItem = { ...action.payload, quantity: 1 }
				state.cartItems.push(newCartItem)
			}
		},
		decreaseItemQuantity: (state, action: PayloadAction<MenuItemType>) => {
			const itemIndex = state.cartItems.findIndex(
				(prod) => prod.id == action.payload.id
			)

			if (state.cartItems[itemIndex].quantity > 1) {
				state.cartItems[itemIndex].quantity -= 1
			} else if (state.cartItems[itemIndex].quantity == 1) {
				// noting to do
			}
		},
		removeCartItem: (state, action: PayloadAction<MenuItemType>) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			'orderSlice/changeCartItemQuantityByInput',
			(state, action) => {}
		)
	},
})

export const {
	setOrderState,
	setOrderDiscount,
	setVisitedLocationSlug,
	addItemToCart,
	increaseItemQuantity,
	decreaseItemQuantity,
	removeCartItem,
	changeCartItemQuantityByInput,
} = orderSlice.actions
export default orderSlice.reducer

export const selectAllCartItems = (state: RootState) => state.order.cartItems
export const selectOrderState = (state: RootState) => state.order
export const selectTotalCartItems = (state: RootState) =>
	state.order.cartItems.length
export const selectVisitedLocationSlug = (state: RootState) =>
	state.order.visited_location_slug
export const getCartTotals = createSelector(
	selectAllCartItems,
	selectOrderState,
	(cartItems, orderState) => {
		let totalQuantity: number = 0
		let subtotal: number = 0
		let totalPrice: number = 0
		let delivery_charge: number = 0

		if (cartItems.length) {
			totalQuantity = cartItems.reduce(
				(sum: number, currentItem: MenuItemType) => {
					sum += currentItem.quantity
					return sum
				},
				0
			)

			subtotal = cartItems.reduce((sum, currentItem: MenuItemType) => {
				sum += Number(currentItem.price) * currentItem.quantity
				return sum
			}, 0)

			delivery_charge =
				orderState.fulfillment_type === 'Delivery'
					? subtotal >= 20
						? 0
						: DELIVERY_CHARGE
					: 0

			const tax_amount = subtotal > 20 ? 0 : subtotal * TAX_RATE

			const discount = Number(orderState?.discount) || 0

			console.log({ subtotal, delivery_charge })
			totalPrice = subtotal - discount + tax_amount + delivery_charge

			totalPrice = decimalFormatter(totalPrice)

			return {
				totalQuantity,
				subtotal,
				totalPrice,
				delivery_charge,
			}
		} else {
			return {
				totalQuantity,
				subtotal,
				totalPrice,
				delivery_charge,
			}
		}
	}
)
