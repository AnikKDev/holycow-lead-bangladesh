'use-client'

import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { format } from 'date-fns'
import { GoClock } from 'react-icons/go'

import '../checkout.css'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'

import { ASAP } from '@/lib/constatns'

const DeliveryTimeArea = () => {
	const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
	const pickerRef = useRef<HTMLInputElement>(null)
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	return (
		<div className=''>
			<div className='grid grid-cols-[auto,1fr] gap-2.5'>
				<div>
					<GoClock size={22} className='text-foreground' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<h3 className='text-base font-medium'>Delivery time</h3>
						<span className='text-sm font-medium'>
							{/* {selectedTime ||
								(selectedDateTime &&
									format(selectedDateTime, 'MM/dd/yyyy, h:mm aa'))} */}
							{orderState.delivery_time === ASAP
								? ASAP
								: format(
										new Date(orderState.delivery_time),
										'MM/dd/yyyy, h:mm aa'
								  )}
						</span>
					</div>
					{/* delivery time selection */}
					<div>
						<fieldset className='flex flex-row items-center gap-4 mobile-md:gap-2.5'>
							<legend className='sr-only'>Delivery</legend>

							<div className='basis-[35%]'>
								<input
									type='radio'
									name='DeliveryOption'
									value='DeliveryStandard'
									id='DeliveryStandard'
									className='peer hidden [&:checked_+_label_svg]:block'
									checked={orderState.delivery_time === 'As soon as possible'}
									onChange={(e) => {
										// setSelectedDateTime(null)
										// setSelectedTime('As soon as possible')
										dispatch(
											setOrderState({
												...orderState,
												delivery_time: ASAP,
											})
										)
									}}
								/>

								<label
									htmlFor='DeliveryStandard'
									className='block cursor-pointer rounded-lg border border-border bg-white px-2.5 py-2 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-foreground peer-checked:ring-1 peer-checked:ring-foreground'
								>
									<div className='flex items-center justify-between'>
										<p className='whitespace-nowrap text-base font-semibold text-foreground'>
											Standard
										</p>

										<svg
											className='hidden h-5 w-5 text-foreground'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fill-rule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
												clip-rule='evenodd'
											/>
										</svg>
									</div>

									<p className='mt-1 whitespace-nowrap text-sm font-medium text-foreground '>
										As soon as possible
									</p>
								</label>
							</div>

							<div className='basis-[43%] mobile-md:basis-3/6'>
								<DatePicker
									selected={
										orderState?.delivery_time === ASAP
											? null
											: new Date(orderState?.delivery_time)
									}
									onChange={(date) => {
										// setSelectedDateTime(date)
										dispatch(
											setOrderState({
												...orderState,
												delivery_time: date.toISOString(),
											})
										)
									}}
									showTimeSelect
									dateFormat='Pp'
									timeFormat='p'
									minDate={new Date()}
									customInput={
										<CustomDatePicker
											value={
												orderState?.delivery_time === ASAP
													? null
													: new Date(orderState?.delivery_time)
											}
											onClick={setSelectedDateTime}
											ref={pickerRef}
										/>
									}
									placeholderText='Choose a time'
									className='whitespace-nowrap text-sm'
								/>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeliveryTimeArea

const CustomDatePicker = React.forwardRef(
	({ value, onClick }: { value: any; onClick: any }, ref: any) => {
		// console.log('value from custom', value)
		return (
			<div className='w-full' onClick={onClick} ref={ref}>
				<input
					type='radio'
					name='DeliveryOption'
					value='DeliveryPriority'
					id='DeliveryPriority'
					className='peer hidden [&:checked_+_label_svg]:block'
					checked={!!value}
				/>

				<label
					htmlFor='DeliveryPriority'
					className='block cursor-pointer rounded-lg border border-border bg-white px-2.5 py-2 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-foreground  peer-checked:ring-1 peer-checked:ring-foreground'
				>
					<div className='flex items-center justify-between'>
						<p className='whitespace-nowrap text-base font-semibold text-foreground'>
							Schedule for later
						</p>

						<svg
							className='hidden h-5 w-5 text-foreground'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>

					<p className='mt-1 text-sm font-medium text-foreground'>
						{value || 'Choose a time'}
					</p>
				</label>
			</div>
		)
	}
)
