import { useState } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { useGetAllAddressesQuery } from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'
import { selectOrderState } from '@/redux/slices/orderSlice/orderSlice'
import { GoHome } from 'react-icons/go'

import { AccountAddress } from '@/types/account/account.types'
import { Button } from '@/components/ui/button'
import { CreateAddressModal } from '@/components/addresses/create-address-modal'

import { ShowAddressesModal } from './show-addresses-modal'

const DeliveryAddressArea = () => {
	const [isSelected, setIsSelected] = useState(false)
	const [showCreateAddressModal, setShowCreatedAddressModal] = useState(false)
	const [showListAddressModal, setShowListAddressModal] = useState(false)
	const orderState = useAppSelector(selectOrderState)
	const {
		data: allAddresses,
		isLoading: allAddressesLoading,
		isSuccess: allAddressesSuccess,
		isError: isAllAddressesError,
		error: allAddressesError,
	} = useGetAllAddressesQuery(null)
	// console.log(allAddresses)

	const btnText =
		!allAddressesLoading && allAddresses?.addresses?.length > 0
			? orderState.delivery_address?.id
				? 'Edit'
				: 'Select'
			: 'Add'

	const [defaultAddress, setDefaultAddress] = useState<AccountAddress>({
		address: '',
		address_name: '',
		apartment_number: '',
		city: 'london',
		customer: '',
		// id: 0,
		postal_code: '',
	})
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2.5'>
					<GoHome size={22} className='text-black' />
					<div>
						{orderState.delivery_address?.id ? (
							<div>
								<h3 className='text-base font-medium'>
									{orderState.delivery_address?.address_name}
									<br />
									<span className='text-sm text-[#494949]'>
										{orderState.delivery_address?.address}
									</span>
								</h3>
							</div>
						) : (
							<h3 className='text-base font-medium'>
								{btnText === 'Add'
									? 'Add your address'
									: btnText === 'Select' && 'Select address'}
							</h3>
						)}
					</div>
				</div>
				<div>
					<Button
						className='h-7 rounded-full px-5'
						size='sm'
						disabled={allAddressesLoading}
						onClick={() => {
							if (btnText === 'Edit' || btnText === 'Select') {
								setShowListAddressModal(true)
							} else if (btnText === 'Add') {
								setShowCreatedAddressModal(true)
							}
						}}
					>
						{btnText}
					</Button>
				</div>
			</div>

			{!allAddressesLoading && showCreateAddressModal && (
				<CreateAddressModal
					isFormCheckout={true}
					defaultAddress={defaultAddress}
					isEditingAddress={false}
					setDefaultAddress={setDefaultAddress}
					setIsEditingAddress={() => {}}
					showModal={showCreateAddressModal}
					setShowModal={setShowCreatedAddressModal}
				/>
			)}
			<ShowAddressesModal
				showModal={showListAddressModal}
				setShowModal={setShowListAddressModal}
			/>
		</>
	)
}

export default DeliveryAddressArea
