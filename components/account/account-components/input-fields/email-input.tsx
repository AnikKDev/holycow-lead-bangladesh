'use client'

import React, { SetStateAction, useEffect } from 'react'
import { useUpdateUserEmailMutation } from '@/redux/slices/authSlice/authApiSlice'
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

export default function EmailInput({
	id,
	name,
	label,
	type,
	setEditingSection,
}: Props) {
	// email update
	const [
		updateUserEmail,
		{
			isLoading: emailUpdateLoading,
			isError: isEmailUpdateError,
			error: emailUpdateError,
			isSuccess: emailUpdateSuccess,
		},
	] = useUpdateUserEmailMutation()

	const [userEmail, setUserEmail] = React.useState<{
		email: string
		confirmEmail: string
	}>({
		email: '',
		confirmEmail: '',
	})
	useEffect(() => {
		if (emailUpdateSuccess) {
			toast.success(
				'A verification email has been sent to your new email address. Please verify your email to continue.'
			)
		}
	}, [emailUpdateSuccess])
	useEffect(() => {
		if (isEmailUpdateError) {
			toast.error(emailUpdateError?.data?.message)
		}
	}, [isEmailUpdateError])
	return (
		<>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					New {label}
				</Label>
				<Input
					onChange={(e) =>
						setUserEmail((prevData) => ({ ...prevData, email: e.target.value }))
					}
					value={userEmail.email}
					type={type}
					id={id}
					placeholder={label}
				/>
			</div>
			{/* note: probably wont use it */}
			{/* <div className='mt-6 grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					Confirm New {label}
				</Label>
				<Input
					value={userEmail.confirmEmail}
					onChange={(e) =>
						setUserEmail((prevData) => ({
							...prevData,
							confirmEmail: e.target.value,
						}))
					}
					type={type}
					id={id}
					placeholder={label}
				/>
			</div> */}
			{/* buttons */}
			<div className='mt-6'>
				<Button
					onClick={() => updateUserEmail({ email: userEmail.email })}
					disabled={emailUpdateLoading}
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
