import { FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import {
	availableReservationTimes,
	availableTime,
	tablePeopleCounts,
} from './data'
import { ReservationTab } from './reservation-tab'

const FindATableTab = ({
	setTab,
}: {
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	const [peopleCountSelect, setPeopleCountSelect] = useState('1')
	const [date, setDate] = useState(new Date())
	const [time, setTime] = useState<string>('7:00 pm')
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<div className='pb-8 pt-1'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='grid grid-cols-[repeat(12,1fr)] items-center'
			>
				<Select
					value={`${peopleCountSelect}`}
					onValueChange={(value) => setPeopleCountSelect(value)}
				>
					<SelectTrigger className='w-[135px] rounded-none rounded-bl-sm rounded-tl-sm p-4'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{tablePeopleCounts.map((item) => (
								<SelectItem key={item} value={`${item}`}>
									{item} {item === 1 ? 'person' : 'people'}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				<DatePicker
					date={date}
					setDate={setDate}
					showIcon={false}
					formatOption='d MMM'
					showDropDownArrow
					className='w-[135px] rounded-none border-l-transparent p-4'
				/>

				<Select value={time} onValueChange={(value) => setTime(value)}>
					<SelectTrigger className='w-[135px] rounded-none border-l-transparent p-4'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{availableReservationTimes.map((item, idx) => (
								<SelectItem key={idx} value={item.time}>
									{item.time}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button className='col-start-4 col-end-13 h-12 w-full rounded-none rounded-br-sm rounded-tr-sm p-4'>
					Find a Table
				</Button>
			</form>

			<div className='flex w-full items-center justify-between space-x-4 pt-6'>
				{availableTime.map((time) => {
					return (
						<Button
							onClick={() => {
								setTab('contact_info')
							}}
							className='w-full'
							disabled={!time.available}
						>
							{time.time}
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export default FindATableTab
