import React, { SetStateAction, useEffect } from 'react'
import { useUpdateUserPasswordMutation } from '@/redux/slices/authSlice/authApiSlice'
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

export default function PasswordInput({
	id,
	name,
	label,
	type,
	setEditingSection,
}: Props) {
	const [userPassword, setUserPassword] = React.useState<{
		password: string
		newPassword: string
		confirmNewPassword: string
	}>({
		password: '',
		newPassword: '',
		confirmNewPassword: '',
	})

	const [updateUserPassword, { isLoading, isSuccess, isError, error }] =
		useUpdateUserPasswordMutation()
	function handlePasswordChange(): void {
		/* check whether the new password and retyped password is matched */
		if (userPassword.newPassword !== userPassword.confirmNewPassword) {
			toast.error('Password mismatched.')
			return
		}
		updateUserPassword({
			current_password: userPassword.password,
			new_password: userPassword.confirmNewPassword,
		})
	}
	useEffect(() => {
		if (isSuccess) toast.success('Password updated successfully')
	}, [isSuccess])
	useEffect(() => {
		if (isError) toast.error(error?.data?.message)
	}, [isError])
	return (
		<>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					Current {label}
				</Label>
				<Input
					onChange={(e) =>
						setUserPassword((prevData) => ({
							...prevData,
							password: e.target.value,
						}))
					}
					value={userPassword.password}
					type={type}
					id={id}
					placeholder={label}
				/>
			</div>
			<div className='mt-6 grid  w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					New {label}
				</Label>
				<Input
					onChange={(e) =>
						setUserPassword((prevData) => ({
							...prevData,
							newPassword: e.target.value,
						}))
					}
					value={userPassword.newPassword}
					type={type}
					id={id}
					placeholder={label}
				/>
			</div>
			<div className='mt-6 grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					Confirm New {label}
				</Label>
				<Input
					type={type}
					onChange={(e) =>
						setUserPassword((prevData) => ({
							...prevData,
							confirmNewPassword: e.target.value,
						}))
					}
					value={userPassword.confirmNewPassword}
					id={id}
					placeholder={label}
				/>
			</div>
			{/* buttons */}
			<div className='mt-6'>
				<Button
					disabled={
						isLoading ||
						!userPassword.confirmNewPassword ||
						!userPassword.newPassword ||
						!userPassword.password
					}
					onClick={handlePasswordChange}
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
