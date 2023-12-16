import React from 'react'
import { ORDERS_TAB } from '@/constants/account.constant'

import { OrderTabType } from '@/types/account/account.types'
import { cn } from '@/lib/utils'
import { Command, CommandInput } from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'

type Props = {
	selectedTab: OrderTabType
	setSelectedTab: React.Dispatch<React.SetStateAction<OrderTabType>>
}

export default function OrderTab({ selectedTab, setSelectedTab }: Props) {
	return (
		<div className='flex items-center justify-between space-x-4 rounded-lg border border-[#D1D5DB] bg-white px-3 py-1 shadow-sm'>
			{/* tab sections */}
			<div className='flex items-center gap-5'>
				{ORDERS_TAB.map((tab) => (
					<div
						onClick={() => setSelectedTab(tab.name)}
						key={tab.name}
						className={cn(
							'cursor-pointer border-b-2 border-transparent text-base capitalize',
							{
								'border-primary': selectedTab === tab.name,
							}
						)}
					>
						<span>{tab.name}</span>
					</div>
				))}
			</div>
			<Separator
				className='h-5 border border-gray-400'
				orientation='vertical'
			/>
			{/* search sections */}
			<div className='flex-1'>
				<Command className='rounded-lg border-none bg-white'>
					<CommandInput
						className='border-none  text-base'
						placeholder='Search by order number'
					/>
				</Command>
			</div>
		</div>
	)
}
