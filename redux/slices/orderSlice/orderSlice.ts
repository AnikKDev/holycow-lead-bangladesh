import { RootState } from '@/redux/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DELIVERY_CHARGE } from '@/lib/constatns'
import { decimalFormatter } from '@/lib/formatter'
import { Extend } from '@/lib/utils'

import { MenuItemType } from '../menuPageSlice/menuPageSlice'

export type FulfillmentType = 'Delivery' | 'Collection'
type OrderInitialState = Extend<
	Partial<{
		cartItems: MenuItemType[]
		discount: number
		promo_code: string
		delivery_charge: number
		fulfillment_type: FulfillmentType
		delivery_address: object
		delivery_time: 'As soon as possible' | Date | null
		collection_address: string
		collection_time: 'As soon as possible' | Date | null
	}>
>

const initialState: OrderInitialState = {
	cartItems: [],
	discount: null,
	promo_code: '',
	delivery_charge: DELIVERY_CHARGE,
	fulfillment_type: 'Delivery',
	delivery_address: {},
	delivery_time: 'As soon as possible',
	collection_address: '',
	collection_time: 'As soon as possible',
}

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrderState: (state, action: PayloadAction<OrderInitialState>) =>
			action.payload,
		setOrderDiscount: (state, action: PayloadAction<number>) => {
			state.discount = action.payload
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
})

export const {
	setOrderState,
	setOrderDiscount,
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

export const getCartTotals = createSelector(
	selectAllCartItems,
	selectOrderState,
	(cartItems, orderState) => {
		let totalQuantity: number = 0
		let subtotal: number = 0
		let totalPrice: number = 0

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

			const discount = Number(orderState?.discount) || 0

			const delivery_charge =
				orderState.fulfillment_type === 'Delivery'
					? Number(orderState.delivery_charge)
					: 0

			totalPrice = subtotal + delivery_charge - discount

			totalPrice = decimalFormatter(Math.round(totalPrice))

			return {
				totalQuantity,
				subtotal,
				totalPrice,
			}
		} else {
			return {
				totalQuantity,
				subtotal,
				totalPrice,
			}
		}
	}
)
