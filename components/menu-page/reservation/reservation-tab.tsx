import { useState } from 'react'

import { cn } from '@/lib/utils'

import ContactInformationTab from './contact-info-tab'
import FindATableTab from './find-table-tab'
import PaymentTab from './payment-tab'

const ReservationTabContainer = () => {
	const [tab, setTab] = useState<'find_table' | 'contact_info' | 'payment'>(
		'find_table'
	)

	const onTabChange = (value) => {
		setTab(value)
	}

	return (
		<div>
			<div className='flex w-full items-center space-x-7 shadow-[rgb(204,204,204)_0px_-1px_0px_inset]'>
				<button
					className={cn(
						'cursor-auto border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary text-primary': tab === 'find_table',
						}
					)}
					onClick={() => {
						setTab('find_table')
					}}
				>
					Find a Table
				</button>
				<button
					className={cn(
						'cursor-auto border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary text-primary': tab === 'contact_info',
						}
					)}
					onClick={() => {
						setTab('contact_info')
					}}
				>
					Contact Information
				</button>
				<button
					className={cn(
						'cursor-auto border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
						{
							'border-primary text-primary': tab === 'payment',
						}
					)}
					onClick={() => {
						setTab('payment')
					}}
				>
					Payment
				</button>
			</div>
			<div className='pb-5 pt-4'>
				{tab === 'find_table' ? (
					<FindATableTab />
				) : tab === 'contact_info' ? (
					<ContactInformationTab />
				) : (
					tab === 'payment' && <PaymentTab />
				)}
			</div>
		</div>
	)
}

export default ReservationTabContainer
