'use client'

import React, { useState } from 'react'
import {
	useGetUserAccountDateQuery,
	useUpdateUserEmailMutation,
	useUpdateUserFullNameMutation,
} from '@/redux/slices/authSlice/authApiSlice'
import { HiOutlinePencil } from 'react-icons/hi'

import InputField from './input-containers/input-field'

type Props = {}

export default function ProfileContainer({}: Props) {
	const [editingSection, setEditingSection] = useState<string | null>(null)
	// api for get request
	const {
		data: accountData,
		isLoading: accountDataLoading,
		isError: accountDataError,
	} = useGetUserAccountDateQuery(undefined)

	return (
		<div className='rounded-lg border border-[#D1D5DB] bg-white'>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				{editingSection === 'name' ? (
					<InputField
						userFullName={accountData?.user?.fullname}
						setEditingSection={setEditingSection}
						editingSection={editingSection}
					/>
				) : (
					<div className='flex items-center justify-between px-5 py-3.5'>
						{/* name */}
						<div className='leading-9'>
							<h5 className='text-base'>Name</h5>
							<span className='text-sm text-[#6B6B83]'>
								{!accountDataError && !accountDataLoading
									? accountData?.user?.fullname
									: 'Loading...'}
							</span>
						</div>
						{/* icon */}
						<div
							onClick={() => setEditingSection('name')}
							className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'
						>
							<HiOutlinePencil className='mr-2' />
							<span>Edit</span>
						</div>
					</div>
				)}
			</div>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				{editingSection === 'email' ? (
					<InputField
						userEmail={accountData?.user?.email}
						setEditingSection={setEditingSection}
						editingSection={editingSection}
					/>
				) : (
					<div className='flex items-center justify-between px-5 py-3.5'>
						{/* name */}
						<div className='leading-9'>
							<h5 className='text-base'>Email</h5>
							<span className='text-sm text-[#6B6B83]'>
								{!accountDataError && !accountDataLoading
									? accountData?.user?.email
									: 'Loading...'}
							</span>
						</div>
						{/* icon */}
						<div
							onClick={() => setEditingSection('email')}
							className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'
						>
							<HiOutlinePencil className='mr-2' />
							<span>Edit</span>
						</div>
					</div>
				)}
			</div>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				{editingSection === 'password' ? (
					<InputField
						setEditingSection={setEditingSection}
						editingSection={editingSection}
					/>
				) : (
					<div className='flex items-center justify-between px-5 py-3.5'>
						{/* name */}
						<div className='leading-9'>
							<h5 className='text-base'>Password</h5>
							<span className='text-sm text-[#6B6B83]'>******</span>
						</div>
						{/* icon */}
						<div
							onClick={() => setEditingSection('password')}
							className='flex cursor-pointer items-center transition-all duration-200 hover:text-primary'
						>
							<HiOutlinePencil className='mr-2' />
							<span>Edit</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
