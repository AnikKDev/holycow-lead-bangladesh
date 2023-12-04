'use client'

import { forwardRef } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react'

import { getPreviousDay } from '@/lib/date'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export const DatePicker = forwardRef<
	HTMLDivElement,
	{
		date?: Date
		setDate: (date?: Date) => void
		showIcon?: boolean
		formatOption?: string
		showDropDownArrow?: boolean
		className?: string
	}
>(function DatePickerCmp(
	{
		date,
		setDate,
		showIcon = true,
		formatOption = 'PPP',
		showDropDownArrow = false,
		className = '',
	},
	ref
) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'h-12 w-full justify-start text-left font-normal',
						!date && 'text-muted-foreground',
						className
					)}
				>
					{showIcon && <CalendarIcon className='mr-2 h-4 w-4' />}
					<div className='flex w-full items-center justify-between gap-2'>
						{date ? (
							<span>{format(date, formatOption)}</span>
						) : (
							<span>Pick a date</span>
						)}
						{showDropDownArrow && (
							<ChevronDown className='h-4 w-4 opacity-50' />
						)}
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' ref={ref}>
				<Calendar
					mode='single'
					selected={date}
					onSelect={setDate}
					initialFocus
					disabled={(date) => date < getPreviousDay()}
					fromMonth={new Date()}
				/>
			</PopoverContent>
		</Popover>
	)
})
