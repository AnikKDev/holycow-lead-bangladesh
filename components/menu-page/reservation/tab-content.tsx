import ContactInformationTab from './contact-info-tab'
import FindATableTab from './find-table-tab'
import PaymentTab from './payment-tab'
import { ReservationTab } from './reservation-modal'

const TabContent = ({
	tab,
	setTab,
}: {
	tab: ReservationTab
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	return (
		<>
			<div className='pb-5 pt-4'>
				{tab === 'find_table' ? (
					<FindATableTab setTab={setTab} />
				) : tab === 'contact_info' ? (
					<ContactInformationTab />
				) : (
					tab === 'payment' && <PaymentTab />
				)}
			</div>
		</>
	)
}

export default TabContent
