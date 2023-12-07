import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { GoClock } from 'react-icons/go'

import { Button } from '@/components/ui/button'

import 'react-datepicker/dist/react-datepicker.css'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'

const CollectionTimeSection = () => {
	const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
	const pickerRef = useRef<HTMLInputElement>(null)
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()

	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<GoClock size={22} className='text-foreground' />
				<div>
					<h3 className='text-base font-medium'>Collection Time</h3>
				</div>
			</div>
			<div>
				<DatePicker
					selected={
						!orderState?.collection_time
							? null
							: new Date(orderState?.collection_time)
					}
					onChange={(date) => {
						// setSelectedDateTime(date)
						dispatch(
							setOrderState({
								...orderState,
								collection_time: date.toISOString(),
							})
						)
					}}
					showTimeSelect
					dateFormat='Pp'
					timeFormat='p'
					minDate={new Date()}
					customInput={
						<CustomCollectionTimeBtn
							value={
								!orderState?.collection_time
									? null
									: new Date(orderState?.collection_time)
							}
							onClick={setSelectedDateTime}
							ref={pickerRef}
						/>
					}
					placeholderText='Schedule'
					className='text-sm'
				/>
			</div>
		</div>
	)
}

const CustomCollectionTimeBtn = React.forwardRef(
	({ value, onClick }: { value: any; onClick: any }, ref: any) => {
		// console.log('value from custom', value)
		return (
			<div onClick={onClick} ref={ref}>
				<Button variant='link' className='h-7 rounded-full px-5' size='sm'>
					{value || 'Schedule'}
				</Button>
			</div>
		)
	}
)

export default CollectionTimeSection
