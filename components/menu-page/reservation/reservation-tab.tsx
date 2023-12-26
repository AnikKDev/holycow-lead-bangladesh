import { cn } from '@/lib/utils'

import { ReservationTab } from './reservation-modal'

const ReservationTabContainer = ({
	tab,
	setTab,
}: {
	tab: ReservationTab
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	return (
		<div>
			<div className='flex w-full items-center space-x-7 shadow-[rgb(204,204,204)_0px_-1px_0px_inset] mobile-sm:space-x-4'>
				<button
					className={cn(
						'cursor-auto whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
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
						'cursor-auto whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
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
						'cursor-auto whitespace-nowrap border-b-2 border-b-transparent pb-3 text-sm font-medium uppercase tracking-[1px] transition',
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
		</div>
	)
}

export default ReservationTabContainer
