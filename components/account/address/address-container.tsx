'use client'

import React, { useEffect, useState } from 'react'
import { useGetAllAddressesQuery } from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'

import { AccountAddress } from '@/types/account/account.types'
import AddressSkeleton from '@/components/ui/custom-ui/skeletons/address-skeleton'
import { CreateAddressModal } from '@/components/addresses/create-address-modal'
import { ShowAddressesModal } from '@/components/checkout/delivery/show-addresses-modal'

import AddressRow from './address-row'

type Props = {}

export default function AddressContainer({}: Props) {
	const [showAddAddressModal, setShowAddAddressModal] = useState<boolean>(false)
	const [editAddressModal, setEditAddressModal] = useState<boolean>(false)
	// handling addresses
	const {
		data: allAddresses,
		isLoading: allAddressesLoading,
		isSuccess: allAddressesSuccess,
		isError: isAllAddressesError,
		error: allAddressesError,
	} = useGetAllAddressesQuery(null)
	// console.log(allAddresses)
	// default and empty address
	// todo: need to get the user id from the token
	const [defaultAddress, setDefaultAddress] = useState<AccountAddress>({
		address: '',
		address_name: '',
		apartment_number: '',
		city: 'london',
		customer: '',
		// id: 0,
		postal_code: '',
	})
	const [isEditingAddress, setIsEditingAddress] = useState<boolean>(false)
	useEffect(() => {
		if (!isEditingAddress) {
			setDefaultAddress({
				address: '',
				address_name: '',
				apartment_number: '',
				city: '',
				customer: '',
				id: 0,
				postal_code: '',
			})
		}
	}, [isEditingAddress])
	let displayableAddress
	// todo: beautify the address skeleton
	if (allAddressesLoading && !allAddressesError) {
		displayableAddress = <AddressSkeleton />
	} else if (
		allAddressesSuccess &&
		!allAddressesError &&
		allAddresses.addresses?.length === 0
	) {
		displayableAddress = (
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center p-6'>
					{/* name */}
					<h3>No address added yet.</h3>
				</div>
			</div>
		)
	} else if (
		!allAddressesLoading &&
		!allAddressesSuccess &&
		allAddressesError
	) {
		displayableAddress = (
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center p-6'>
					{/* name */}
					<h3>Couldn't get the addresses.</h3>
				</div>
			</div>
		)
	} else {
		displayableAddress = allAddresses?.addresses?.map((address) => (
			<AddressRow
				setIsEditingAddress={setIsEditingAddress}
				setDefaultAddress={setDefaultAddress}
				setEditAddressModal={setEditAddressModal}
				address={address}
			/>
		))
	}
	return (
		<div className='rounded-lg border border-[#D1D5DB] bg-white'>
			{/* seactions */}
			{/* <AddressRow setEditAddressModal={setEditAddressModal} /> */}
			{displayableAddress}

			<div className='border-b border-[#D1D5DB]'>
				<div className='px-6 py-4'>
					<span
						onClick={() => {
							setIsEditingAddress(false)
							setShowAddAddressModal(true)
						}}
						className='cursor-pointer  font-bold transition-all duration-200 hover:text-primary'
					>
						+ Add a new address
					</span>
				</div>
			</div>
			{/* address modal */}
			<CreateAddressModal
				isEditingAddress={isEditingAddress}
				setIsEditingAddress={setIsEditingAddress}
				defaultAddress={defaultAddress}
				setDefaultAddress={setDefaultAddress}
				showModal={showAddAddressModal}
				setShowModal={setShowAddAddressModal}
			/>
			{/* for editing address */}
			{/* todo: we can reuse this very modal for editing the existing address */}
			<CreateAddressModal
				isEditingAddress={isEditingAddress}
				setDefaultAddress={setDefaultAddress}
				setIsEditingAddress={setIsEditingAddress}
				defaultAddress={defaultAddress}
				showModal={editAddressModal}
				setShowModal={setEditAddressModal}
			/>
		</div>
	)
}
