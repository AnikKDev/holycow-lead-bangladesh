'use client'

import { Dispatch, SetStateAction, useState } from 'react'

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

	const handleInputChange = (e) => {
		const { id, value } = e.target
		setDefaultAddress({
			...defaultAddress,
			[id]: value,
		})
	}

	console.log(isEditingAddress)
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
								value={!isEditingAddress ? '' : defaultAddress.postal_code}
								type='string'
								id='postcode'
								placeholder='e.g. N9'
								onChange={handleInputChange}
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='address'>Address *</Label>
							<Input
								value={!isEditingAddress ? '' : defaultAddress.address}
								type='string'
								id='address'
								placeholder='e.g. 555  Main st'
								onChange={handleInputChange}
							/>
						</div>
						<div className='grid w-full items-center gap-1.5'>
							<Label htmlFor='apt'>Apt, suite, floor</Label>
							<Input
								value={!isEditingAddress ? '' : defaultAddress.apartment_number}
								type='string'
								id='apt'
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
								value={!isEditingAddress ? '' : defaultAddress.address_name}
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
									onClick={() => console.log(defaultAddress)}
									variant='default'
									size='lg'
									className='w-full rounded-full'
								>
									Submit
								</Button>
								<Button
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
