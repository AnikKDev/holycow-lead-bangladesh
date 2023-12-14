import React from 'react'
import { ORDERS_TAB } from '@/constants/account.constant'

import { Command, CommandInput } from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'

type Props = {}

export default function OrderTab({}: Props) {
	return (
		<div className='flex items-center justify-between space-x-4 rounded-lg border border-[#D1D5DB] px-3 py-1 shadow-sm'>
			{/* tab sections */}
			<div className='flex'>
				{ORDERS_TAB.map((tab) => (
					<div key={tab.name} className='me-7 text-base capitalize'>
						<span>{tab.name}</span>
						{tab.name === 'current orders' && (
							<div className='mt-0.5 h-0.5 w-full bg-primary' />
						)}
					</div>
				))}
			</div>
			<Separator
				className='h-5 border border-gray-400'
				orientation='vertical'
			/>
			{/* search sections */}
			<div className='flex-1'>
				<Command className='rounded-lg border-none'>
					<CommandInput
						className='border-none text-base'
						placeholder='Type a command or search...'
					/>
				</Command>
			</div>
		</div>
	)
}
