'use client'

import React, { useState } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'

import { CreateAddressModal } from '@/components/addresses/create-address-modal'

type Props = {}

export default function AddressContainer({}: Props) {
	const [showAddAddressModal, setShowAddAddressModal] = useState<boolean>(false)
	return (
		<div className='rounded-lg border border-[#D1D5DB] bg-white'>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center justify-between p-6'>
					{/* name */}
					<div className='leading-9'>
						<h5 className='text-lg'>Home</h5>
						<span className='text-sm text-[#6B6B83]'>
							Archway, Junction Road
						</span>
					</div>
					{/* icons */}
					<div className='flex items-center space-x-6'>
						<div className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'>
							<RiDeleteBinLine className='mr-2' />
							<span>Delete</span>
						</div>
						<div className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'>
							<HiOutlinePencil className='mr-2' />
							<span>Edit</span>
						</div>
					</div>
				</div>
			</div>
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center justify-between p-6'>
					{/* name */}
					<div className='leading-9'>
						<h5 className='text-lg'>Office</h5>
						<span className='text-sm text-[#6B6B83]'>Angel Main Street</span>
					</div>
					{/* icon */}
					<div className='flex items-center space-x-6'>
						<div className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'>
							<RiDeleteBinLine className='mr-2' />
							<span>Delete</span>
						</div>
						<div className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'>
							<HiOutlinePencil className='mr-2' />
							<span>Edit</span>
						</div>
					</div>
				</div>
			</div>
			<div className='border-b border-[#D1D5DB]'>
				<div className='px-6 py-4'>
					<span
						onClick={() => setShowAddAddressModal(true)}
						className='cursor-pointer  font-bold transition-all duration-200 hover:text-primary'
					>
						+ Add a new address
					</span>
				</div>
			</div>
			{/* address modal */}
			<CreateAddressModal
				showModal={showAddAddressModal}
				setShowModal={setShowAddAddressModal}
			/>
		</div>
	)
}
