import React, { SetStateAction } from 'react'

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
	return (
		<>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					Current {label}
				</Label>
				<Input type={type} id={id} placeholder={label} />
			</div>
			<div className='mt-6 grid  w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					New {label}
				</Label>
				<Input type={type} id={id} placeholder={label} />
			</div>
			<div className='mt-6 grid w-full max-w-sm items-center gap-1.5'>
				<Label className='text-[#00000091]' htmlFor={id}>
					Confirm New {label}
				</Label>
				<Input type={type} id={id} placeholder={label} />
			</div>
			{/* buttons */}
			<div className='mt-6'>
				<Button className='rounded-full px-6 capitalize' variant='default'>
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
