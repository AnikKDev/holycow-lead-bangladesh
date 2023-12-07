'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import {
	useCreateAddressMutation,
	useUpdateAddressMutation,
} from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'

import { AccountAddress } from '@/types/account/account.types'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

import { Input } from '../ui/input'
import { Label } from '../ui/label'

export function CreateAddressModal({
	isEditingAddress,
	showModal,
	setShowModal,
	defaultAddress,
	setIsEditingAddress,
	setDefaultAddress,
}: {
	showModal: boolean
	isEditingAddress: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	setDefaultAddress: Dispatch<SetStateAction<AccountAddress>>
	setIsEditingAddress: Dispatch<SetStateAction<boolean>>
	defaultAddress: AccountAddress
}) {
	// const [editedAddress, setEditedAddress] = useState({ ...defaultAddress });
	const [
		createAddress,
		{
			isLoading: createAddressLoading,
			isSuccess: createAddressSuccess,
			isError: isCreateAddressError,
			error: createAddressError,
		},
	] = useCreateAddressMutation()
	const [
		updateAddress,
		{
			isLoading: updateAddressLoading,
			isSuccess: updateAddressSuccess,
			isError: isUpdateAddressError,
			error: updateAddressError,
		},
	] = useUpdateAddressMutation()
	const handleInputChange = (e) => {
		const { id, value } = e.target
		setDefaultAddress({
			...defaultAddress,
			[id]: value,
		})
	}
	const handleSubmit = () => {
		if (isEditingAddress) {
			updateAddress({ address: defaultAddress, addressId: defaultAddress.id })
		} else {
			createAddress(defaultAddress)
		}
	}
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='border-b  border-border pb-5 pt-5 text-center'>
						<DialogTitle>
							{isEditingAddress ? 'Edit address' : 'Add new address'}
						</DialogTitle>
					</DialogHeader>

					<div className='flex flex-col space-y-4 px-5'>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='postcode'>Postcode *</Label>
							<Input
								value={defaultAddress.postal_code}
								type='string'
								id='postal_code'
								placeholder='e.g. N9'
								onChange={handleInputChange}
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='address'>Address *</Label>
							<Input
								value={defaultAddress.address}
								type='string'
								id='address'
								placeholder='e.g. 555  Main st'
								onChange={handleInputChange}
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='apt'>Apt, suite, floor</Label>
							<Input
								value={defaultAddress.apartment_number}
								type='string'
								id='apartment_number'
								placeholder='e.g. 15F'
								onChange={handleInputChange}
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='city'>City</Label>
							<Input
								// value={isEditingAddress ? '' : defaultAddress.city}
								type='string'
								id='city'
								placeholder='London'
								disabled
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='address_name'>Address name *</Label>
							<Input
								value={defaultAddress.address_name}
								type='string'
								id='address_name'
								placeholder='e.g. Home'
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<DialogFooter className='mt-2 flex-col gap-2 border-t border-border pb-4 pt-4'>
						<div className='px-5'>
							<div className='flex w-full items-center gap-2.5'>
								<Button
									disabled={updateAddressLoading || createAddressLoading}
									onClick={handleSubmit}
									variant='default'
									size='lg'
									className='w-full rounded-full'
								>
									Submit
								</Button>
								<Button
									disabled={updateAddressLoading || createAddressLoading}
									variant='outline'
									size='lg'
									className='w-full rounded-full'
									onClick={() => {
										setShowModal(false)
										setIsEditingAddress(false)
									}}
								>
									Cancel
								</Button>
							</div>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
