import BookingContactForm from './contact-form'
import { ReservationTab } from './reservation-modal'
import TableSelectedOptions from './selected-options'

const ContactInformationTab = ({
	setTab,
}: {
	setTab: React.Dispatch<React.SetStateAction<ReservationTab>>
}) => {
	return (
		<div className='pb-8'>
			<TableSelectedOptions />

			<BookingContactForm setTab={setTab} />
		</div>
	)
}

export default ContactInformationTab
