import React from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'

import { AccountAddress } from '@/types/account/account.types'

type Props = {
	setEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>
	setIsEditingAddress: React.Dispatch<React.SetStateAction<boolean>>
	setDefaultAddress: React.Dispatch<React.SetStateAction<AccountAddress>>
	address?: AccountAddress
}

export default function AddressRow({
	setEditAddressModal,
	address: userAddress,
	setDefaultAddress,
	setIsEditingAddress,
}: Props) {
	const {
		address,
		address_name,
		apartment_number,
		city,
		customer,
		id,
		postal_code,
	} = userAddress || {}
	return (
		<div className='border-b border-[#D1D5DB]'>
			<div className='flex items-center justify-between p-6'>
				{/* name */}
				<div className='leading-9'>
					<h5 className='text-lg capitalize'>{address_name}</h5>
					<span className='text-sm capitalize text-[#6B6B83]'>{address}</span>
				</div>
				{/* icon */}
				<div className='flex items-center space-x-6'>
					<div className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'>
						<RiDeleteBinLine className='mr-2' />
						<span>Delete</span>
					</div>
					<div
						onClick={() => {
							setDefaultAddress(userAddress)
							setEditAddressModal(true)
							setIsEditingAddress(true)
						}}
						className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'
					>
						<HiOutlinePencil className='mr-2' />
						<span>Edit</span>
					</div>
				</div>
			</div>
		</div>
	)
}
