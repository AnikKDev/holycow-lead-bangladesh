import { useState } from 'react'
import { GoHome } from 'react-icons/go'

import { Button } from '@/components/ui/button'
import { CreateAddressModal } from '@/components/addresses/create-address-modal'

import { ShowAddressesModal } from './show-addresses-modal'

const DeliveryAddressArea = () => {
	const [isSelected, setIsSelected] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [showAddressModal, setShowAddressModal] = useState(false)
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<GoHome
						size={22}
						className='text-black'
						onClick={() => setIsSelected(!isSelected)}
					/>
					<div>
						{isSelected ? (
							<div>
								<h3 className='text-base font-medium'>
									Home
									<br />
									<span className='text-sm text-[#494949]'>
										London N6 5BA, UK
									</span>
								</h3>
							</div>
						) : (
							<h3 className='text-base font-medium'>Add your address</h3>
						)}
					</div>
				</div>
				<div>
					<Button
						className='h-7 rounded-full px-5'
						size='sm'
						onClick={() => {
							if (isSelected) {
								setShowAddressModal(true)
							} else {
								setShowModal(true)
							}
						}}
					>
						{isSelected ? 'Edit' : 'Add'}
					</Button>
				</div>
			</div>

			<CreateAddressModal showModal={showModal} setShowModal={setShowModal} />
			<ShowAddressesModal
				showModal={showAddressModal}
				setShowModal={setShowAddressModal}
			/>
		</>
	)
}

export default DeliveryAddressArea
