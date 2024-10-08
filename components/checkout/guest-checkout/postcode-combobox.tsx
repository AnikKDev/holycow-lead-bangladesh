'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export function PostcodeCombobox({
	options,
	onChange,
	selectedValue,
}: {
	options: { value: string; label: string }[]
	onChange: (e: string) => void
	selectedValue: string
}) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState(selectedValue || '')

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-full justify-between'
				>
					{value
						? options.find((option) => option.value === value)?.label
						: 'Select postcode...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='max-h-56 w-full overflow-x-auto p-0'>
				<Command>
					<CommandInput required placeholder='Search your postcode...' />
					<CommandEmpty>No postcode found.</CommandEmpty>
					<CommandGroup>
						{options.map((option) => (
							<CommandItem
								key={option.value}
								value={option.value}
								onSelect={(currentValue) => {
									console.log({ currentValue })
									setValue(currentValue === value ? '' : currentValue)
									onChange(currentValue === value ? '' : currentValue)

									setOpen(false)
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === option.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{option.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
