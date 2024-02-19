import React from 'react'
import { ORDERS_TAB } from '@/constants/account.constant'

import { cn } from '@/lib/utils'
import { Command, CommandInput } from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'

type Props = {
	searchText: string
	setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export default function OrderTab({ searchText, setSearchText }: Props) {
	return (
		<div className='flex items-center justify-between space-x-4 rounded-lg border border-[#D1D5DB] bg-white px-3 py-1 shadow-sm'>
			{/* search sections */}
			<div className='flex-1'>
				<Command className='rounded-lg border-none bg-white'>
					<CommandInput
						className='border-none  text-base'
						placeholder='Search by order number'
						value={searchText}
						onValueChange={setSearchText}
					/>
				</Command>
			</div>
		</div>
	)
}
