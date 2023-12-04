'use client'

import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function HomeShowLocationsModal({
	header,
	selectOptions,
	showModal,
	setShowModal,
}: {
	header: string
	selectOptions: { name: string; slug: string }[]
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	const router = useRouter()
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] px-5'>
					<DialogHeader className='pb-3  pt-5 text-left'>
						<DialogTitle>{header}</DialogTitle>
					</DialogHeader>

					<div className=''>
						<Select
							onValueChange={(e) => {
								const selectedItem = selectOptions.find(
									(item) => item.name === e
								)
								router.push(selectedItem.slug, {
									scroll: false,
								})
							}}
						>
							<SelectTrigger className='w-full p-4'>
								<SelectValue placeholder='Select a location' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{selectOptions.map((item) => (
										<SelectItem key={item.name} value={item.name}>
											{item.name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}
