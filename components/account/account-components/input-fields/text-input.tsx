'use client'

import React, { SetStateAction, useEffect } from 'react'
import { useUpdateUserFullNameMutation } from '@/redux/slices/authSlice/authApiSlice'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
	label: string
	type: string
	id: string
	name: string
	setEditingSection: React.Dispatch<SetStateAction<string | null>>
}

export default function TextInput({
	id,
	name,
	label,
	type,
	setEditingSection,
}: Props) {
	// name update
	const [
		updateUserFullName,
		{
			isLoading: fullNameUpdateLoading,
			isError: isFullNameUpdateError,
			error: fullNameUpdateError,

			isSuccess: fullNameUpdateSuccess,
		},
	] = useUpdateUserFullNameMutation()
	const [fullName, setFullName] = React.useState<string>('')
	useEffect(() => {
		if (fullNameUpdateSuccess) {
			toast.success('Name updated successfully')
		}
	}, [fullNameUpdateSuccess])
	useEffect(() => {
		if (isFullNameUpdateError) {
			toast.error(fullNameUpdateError?.data?.message)
		}
	}, [isFullNameUpdateError])
	return (
		<>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					{label}
				</Label>
				<Input
					onChange={(e) => setFullName(e.target.value)}
					type={type}
					value={fullName}
					id={id}
					placeholder={label}
				/>
			</div>
			{/* buttons */}
			<div className='mt-6'>
				<Button
					onClick={() => updateUserFullName({ full_name: fullName })}
					disabled={fullNameUpdateLoading}
					className='rounded-full px-6 capitalize'
					variant='default'
				>
					Update {name}
				</Button>
				<Button
					onClick={() => setEditingSection('')}
					className='mx-2 rounded-full px-6 capitalize'
					variant='outline'
				>
					Cancel
				</Button>
			</div>
		</>
	)
}
