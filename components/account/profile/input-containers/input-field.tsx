import React, { SetStateAction } from 'react'

import EmailInput from '../../account-components/input-fields/email-input'
import PasswordInput from '../../account-components/input-fields/password-input'
import TextInput from '../../account-components/input-fields/text-input'

type Props = {
	setEditingSection: React.Dispatch<SetStateAction<string | null>>
	editingSection: string | null
	emailLoading?: boolean
	emailError?: boolean
	emailSuccess?: boolean
	updateUserEmail?: any
}

export default function InputField({
	setEditingSection,
	editingSection,
	emailError,
	emailLoading,
	emailSuccess,

	updateUserEmail,
}: Props) {
	let displayContent
	if (editingSection.toLowerCase() === 'name') {
		displayContent = (
			<TextInput
				id='full_name'
				label='Full Name'
				type='text'
				key={'full_name'}
				name='name'
				setEditingSection={setEditingSection}
			/>
		)
	} else if (editingSection.toLowerCase() === 'email') {
		displayContent = (
			<EmailInput
				id='email'
				label='Email'
				type='email'
				key={'email'}
				name='email'
				setEditingSection={setEditingSection}
				emailLoading={emailLoading}
				emailError={emailError}
				emailSuccess={emailSuccess}
				updateUserEmail={updateUserEmail}
			/>
		)
	} else if (editingSection.toLowerCase() === 'password') {
		displayContent = (
			<PasswordInput
				id='password'
				label='Password'
				type='password'
				key={'password'}
				name='password'
				setEditingSection={setEditingSection}
			/>
		)
	}
	return (
		<div className='p-6'>
			<h4 className='mb-5 text-xl font-bold capitalize'>
				Edit {editingSection}
			</h4>
			{displayContent}
		</div>
	)
}
