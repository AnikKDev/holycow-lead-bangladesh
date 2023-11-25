'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { Pencil, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CreateAddressModal } from '@/components/addresses/create-address-modal'

export function ShowAddressesModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	const [showCreateAddressModal, setShowCreateAddressModal] = useState(false)
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='border-b  border-border px-5 pb-5 pt-5 text-left'>
						<DialogTitle>Edit Addresses</DialogTitle>
					</DialogHeader>

					<ViewAddressSection />

					<DialogFooter className='mt-2 pb-4 pt-4'>
						<div className='px-5'>
							<div className='flex items-center gap-2.5'>
								<Button
									variant='default'
									size='default'
									className='rounded-full px-6'
									onClick={() => {
										setShowCreateAddressModal(true)
									}}
								>
									Create new address
								</Button>
							</div>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<CreateAddressModal
				showModal={showCreateAddressModal}
				setShowModal={setShowCreateAddressModal}
			/>
		</>
	)
}

export function ViewAddressSection() {
	return (
		<RadioGroup
			defaultValue='comfortable'
			className='flex flex-col space-y-1 px-5'
		>
			<div className='flex items-center justify-between space-x-2'>
				<div className='flex items-center gap-2.5'>
					<RadioGroupItem value='default' id='r1' className='' />
					<Label htmlFor='r1' className='flex flex-col'>
						<h3 className='text-base font-medium'>Home</h3>
						<span className='text-sm font-medium'>London N6 5BA, UK</span>
					</Label>
				</div>
				<div className='flex items-center gap-4'>
					<Pencil size={20} className='cursor-pointer text-foreground' />
					<X size={24} className='cursor-pointer text-foreground' />
				</div>
			</div>
			<div className='border-b border-border'></div>

			<div className='flex items-center justify-between space-x-2'>
				<div className='flex items-center gap-2.5'>
					<RadioGroupItem value='school' id='r2' className='' />
					<Label htmlFor='r2' className='flex flex-col'>
						<h3 className='text-base font-medium'>Office</h3>
						<span className='text-sm font-medium'>Archway N6 5BA, UK</span>
					</Label>
				</div>
				<div className='flex items-center gap-4'>
					<Pencil size={20} className='cursor-pointer text-foreground' />
					<X size={24} className='cursor-pointer text-foreground' />
				</div>
			</div>
		</RadioGroup>
	)
}
