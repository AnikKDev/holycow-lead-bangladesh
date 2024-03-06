'use client'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useApplyPromoCodeMutation } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import {
	getCartTotals,
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { IoPricetagOutline } from 'react-icons/io5'
import { z } from 'zod'

import AutoForm from '../ui/auto-form'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { LoginRegisterModal } from './login-register-modal'

// Define your form schema using zod
const formSchema = z.object({
	promo_code: z
		.string({
			required_error: 'Promo code can not be empty.',
		})
		.describe('Promo Code'),
})

const PromoCodeApply = ({
	isGuestCheckout = false,
}: {
	isGuestCheckout: boolean
}) => {
	const [showLoginRegModal, setShowLoginRegModal] = useState(false)
	const orderState = useAppSelector(selectOrderState)
	const cartTotals = useAppSelector(getCartTotals)
	const dispatch = useAppDispatch()
	const [applyPromoCode, { isLoading, isError }] = useApplyPromoCodeMutation()
	const handleSubmit = async (data: Partial<z.infer<typeof formSchema>>) => {
		try {
			const res = await applyPromoCode({
				coupon_code: data.promo_code.toUpperCase(),
				subtotal: cartTotals.subtotal,
			}).unwrap()
			console.log(res)
			const { discounted_amount, promo_code } = res
			dispatch(
				setOrderState({
					...orderState,
					discount: discounted_amount,
					promo_code: data.promo_code.toUpperCase(),
					promo_code_id: promo_code,
				})
			)
			toast.success('Promo code applied successfully!')
		} catch (e) {
			console.log(e)
			toast.error(e?.data?.message || 'Invalid promo code')
		}
	}
	return (
		<>
			<div className='grid grid-cols-[auto,1fr] items-start justify-start gap-2.5'>
				<div>
					<IoPricetagOutline size={22} className='text-foreground' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex content-start items-center justify-between'>
						<h3 className='text-base font-medium'>Promo Code</h3>

						{orderState.discount && (
							<Button
								variant='link'
								size='sm'
								className='h-fit text-foreground'
								onClick={() => {
									dispatch(
										setOrderState({
											...orderState,
											discount: null,
											promo_code: '',
											promo_code_id: null,
										})
									)
								}}
							>
								Remove
							</Button>
						)}
					</div>

					{!orderState.discount ? (
						<div className='flex w-full items-center'>
							<AutoForm
								containerClassName='w-full'
								className='flex w-full items-baseline gap-2  '
								onSubmit={(data) => {
									if (isGuestCheckout) {
										setShowLoginRegModal(true)
										return
									}
									handleSubmit(data)
								}}
								formSchema={formSchema}
								fieldConfig={{
									promo_code: {
										inputProps: {
											showLabel: false,
											placeholder: 'Enter promo code',
											type: 'text',
											className: 'bg-white uppercase placeholder:capitalize',
											autoCapitalize: 'on',
											required: !isGuestCheckout,
										},
									},
								}}
							>
								<Button
									onClick={() => {
										console.log({ isGuestCheckout })
										if (isGuestCheckout) {
											setShowLoginRegModal(true)
											return
										}
									}}
									type='submit'
									className='!m-0'
									disabled={isLoading}
								>
									{isLoading && (
										<Loader2 className='mr-1.5 h-4 w-4 animate-spin' />
									)}
									Apply
								</Button>
							</AutoForm>
						</div>
					) : (
						<div className=''>
							<Badge variant='outline' className='h-[40px] px-4 py-2 text-sm'>
								Applied {orderState.promo_code}
							</Badge>
						</div>
					)}
				</div>
			</div>

			<LoginRegisterModal
				isGuestCheckout={isGuestCheckout}
				headerText='Login or create an account to apply promo code'
				showModal={showLoginRegModal}
				setShowModal={setShowLoginRegModal}
			/>
		</>
	)
}

export default PromoCodeApply
