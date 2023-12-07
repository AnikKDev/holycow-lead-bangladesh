'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetAllAddressesQuery } from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { Pencil, X } from 'lucide-react'

import { AccountAddress } from '@/types/account/account.types'
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

export function ShowAddressesModal({
	showModal,
	setShowModal,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
	const [showCreateAddressModal, setShowCreateAddressModal] = useState(false)
	const {
		data: allAddresses,
		isLoading: allAddressesLoading,
		isSuccess: allAddressesSuccess,
		isError: isAllAddressesError,
		error: allAddressesError,
	} = useGetAllAddressesQuery(null)
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='border-b  border-border px-5 pb-5 pt-5 text-left'>
						<DialogTitle>Edit Addresses</DialogTitle>
					</DialogHeader>

					{allAddressesLoading ? (
						<p>Getting all address...</p>
					) : isAllAddressesError ? (
						<p>Error getting address</p>
					) : (
						allAddresses?.addresses?.length > 0 && (
							<ViewAddressSection allAddress={allAddresses?.addresses} />
						)
					)}

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
			{/* <CreateAddressModal
				showModal={showCreateAddressModal}
				setShowModal={setShowCreateAddressModal}
			/> */}
		</>
	)
}

export function ViewAddressSection({ allAddress }) {
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	return (
		<RadioGroup
			className='flex flex-col space-y-1 px-5'
			onValueChange={(id) => {
				const selectedAddress = allAddress.find((a) => a.id == id)
				console.log({ selectedAddress })
				dispatch(
					setOrderState({
						...orderState,
						delivery_address: selectedAddress,
					})
				)
			}}
			value={`${orderState?.delivery_address?.id || ''}`}
		>
			{allAddress.map((address: AccountAddress) => {
				return (
					<>
						<div
							key={address.id}
							className='flex items-center justify-between space-x-2'
						>
							<div className='flex items-center gap-2.5'>
								<RadioGroupItem
									value={`${address.id}`}
									id={`${address.address_name}`}
									className=''
								/>
								<Label
									htmlFor={`${address.address_name}`}
									className='flex flex-col'
								>
									<h3 className='text-base font-medium'>
										{address?.address_name}
									</h3>
									<span className='text-sm font-medium'>
										{address?.address}
									</span>
								</Label>
							</div>
							<div className='flex items-center gap-4'>
								<Pencil size={20} className='cursor-pointer text-foreground' />
								<X size={24} className='cursor-pointer text-foreground' />
							</div>
						</div>
						<div className='border-b border-border'></div>
					</>
				)
			})}

			{/* <div className='flex items-center justify-between space-x-2'>
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
			</div> */}
		</RadioGroup>
	)
}
