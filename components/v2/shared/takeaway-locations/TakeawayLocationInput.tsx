'use client'

import React, { useState } from 'react'
import { Command as CommandPrimitive } from 'cmdk'

import { Command, CommandGroup, CommandItem } from '@/components/ui/command'

interface TakeawayLocationInputProps {
	searchInput: string
	setSearchInput: React.Dispatch<React.SetStateAction<string>>
	uniquePostcodes: string[]
}

const TakeawayLocationInput = ({
	searchInput,
	setSearchInput,
	uniquePostcodes,
}: TakeawayLocationInputProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [open, setOpen] = React.useState(false)
	const handleInputChange = (e) => {
		setSearchInput(e)
		setOpen(true)
	}
	return (
		<Command className='z-50 max-w-xl overflow-visible bg-transparent'>
			<div className='group !w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
				<CommandPrimitive.Input
					ref={inputRef}
					value={searchInput}
					onValueChange={handleInputChange}
					onBlur={() => setOpen(false)}
					onFocus={() => setOpen(true)}
					placeholder='Search by postal code...'
					className='ml-2 w-full flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
				/>
			</div>
			<div className='relative z-50 mt-2 '>
				{open && uniquePostcodes.length > 0 ? (
					<div className='absolute top-0 z-10 max-h-screen w-full overflow-y-scroll rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in'>
						<CommandGroup className='h-full overflow-auto'>
							{uniquePostcodes.map((postcode) => {
								return (
									<CommandItem
										key={postcode}
										onMouseDown={(e) => {
											e.preventDefault()
											e.stopPropagation()
										}}
										onSelect={(value) => {
											setSearchInput(value)
											setOpen(false)
										}}
										className={'cursor-pointer'}
									>
										{postcode}
									</CommandItem>
								)
							})}
						</CommandGroup>
					</div>
				) : null}
			</div>
		</Command>
	)
}

export default TakeawayLocationInput
