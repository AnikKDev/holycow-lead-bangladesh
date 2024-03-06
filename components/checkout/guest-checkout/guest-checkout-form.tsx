import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { selectOrderState } from '@/redux/slices/orderSlice/orderSlice'
import { Info } from 'lucide-react'

import { hasAllValues } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { GuestInfoFormModal } from './GuestInfoModal'

const GuestCheckoutInfoForm = () => {
	const [showCreateGuestInfoModal, setShowCreateGuestInfoModal] =
		useState(false)
	const [showEditGuestModal, setShowEditGuestModal] = useState(false)
	const orderState = useAppSelector(selectOrderState)
	const btnText = orderState.guest_info?.name ? 'Edit' : 'Add'
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<Info size={22} className='text-black' />
					<div>
						{hasAllValues(orderState.guest_info) ? (
							<div>
								<h3 className='text-base font-medium'>
									{orderState.guest_info.name}
									<br />
									<span className='text-sm text-[#494949]'>
										{orderState.guest_info.email}
									</span>
									<br />

									<span className='text-sm text-[#494949]'>
										{orderState.guest_info.phone_number}
									</span>
									<br />

									<span className='text-sm text-[#494949]'>
										{orderState.guest_info.address}
									</span>
								</h3>
							</div>
						) : (
							<h3 className='text-base font-medium'>
								{btnText === 'Add'
									? 'Add your information'
									: btnText === 'Edit' && 'Edit Info'}
							</h3>
						)}
					</div>
				</div>
				<div>
					<Button
						className='h-7 rounded-full px-5'
						size='sm'
						onClick={() => {
							if (btnText === 'Edit') {
								setShowEditGuestModal(true)
							} else if (btnText === 'Add') {
								setShowCreateGuestInfoModal(true)
							}
						}}
					>
						{btnText}
					</Button>
				</div>
			</div>

			<GuestInfoFormModal
				showModal={showCreateGuestInfoModal}
				setShowModal={setShowCreateGuestInfoModal}
				isEditInfo={false}
			/>

			<GuestInfoFormModal
				showModal={showEditGuestModal}
				setShowModal={setShowEditGuestModal}
				isEditInfo
			/>
		</>
	)
}

export default GuestCheckoutInfoForm
