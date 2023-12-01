import { FormEvent, useState } from 'react'

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

import { tablePeopleCounts } from './date'

const FindATableTab = () => {
	const [peopleCountSelect, setPeopleCountSelect] = useState('1')
	const [date, setDate] = useState(new Date())
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Select
					required
					value={`${peopleCountSelect}`}
					onValueChange={(value) => setPeopleCountSelect(value)}
				>
					<SelectTrigger className='w-[130px] p-4'>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{tablePeopleCounts.map((item) => (
								<SelectItem key={item} value={`${item}`}>
									{item} {item === 1 ? 'Person' : 'People'}
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
					className='w-[130px] p-4'
				/>
			</form>
		</div>
	)
}

export default FindATableTab
