import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { IoPricetagOutline } from 'react-icons/io5'
import { z } from 'zod'

import AutoForm from '../ui/auto-form'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

// Define your form schema using zod
const formSchema = z.object({
	promo_code: z
		.string({
			required_error: 'Promo code can not be empty.',
		})
		.describe('Promo Code'),
})

const PromoCodeApply = () => {
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	const handleSubmit = async (data: Partial<z.infer<typeof formSchema>>) => {
		dispatch(
			setOrderState({
				...orderState,
				discount: 3,
				promo_code: data.promo_code.toUpperCase(),
			})
		)
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
								className='flex w-full items-center gap-2  '
								onSubmit={(data) => {
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
										},
									},
								}}
							>
								<Button type='submit' className='!m-0'>
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
		</>
	)
}

export default PromoCodeApply
