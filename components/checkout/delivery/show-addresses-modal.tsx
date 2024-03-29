'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	useDeleteAddressMutation,
	useGetAllAddressesQuery,
} from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { Loader2, Pencil, X } from 'lucide-react'
import toast from 'react-hot-toast'

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
import { CreateAddressModal } from '@/components/addresses/create-address-modal'

import { addressInitialState } from './delivery-address'

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
	const [defaultAddress, setDefaultAddress] =
		useState<AccountAddress>(addressInitialState)
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
			<CreateAddressModal
				isFormCheckout
				defaultAddress={defaultAddress}
				isEditingAddress={false}
				setDefaultAddress={setDefaultAddress}
				setIsEditingAddress={() => {}}
				showModal={showCreateAddressModal}
				setShowModal={setShowCreateAddressModal}
			/>
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
				return <AddressSectionItem key={address.id} address={address} />
			})}
		</RadioGroup>
	)
}

const AddressSectionItem = ({ address }: { address: AccountAddress }) => {
	const [editAddressModal, setEditAddressModal] = useState(false)
	const [defaultAddress, setDefaultAddress] = useState<AccountAddress>(address)
	const [
		deleteAddress,
		{
			isLoading: deleteAddressLoading,
			isSuccess: deleteAddressSuccess,
			isError: isDeleteAddressError,
			error: deleteAddressError,
		},
	] = useDeleteAddressMutation()
	const handleDeleteAddress = async () => {
		try {
			await deleteAddress(address.id).unwrap()
			toast.success('Address deleted successfully')
		} catch (e) {
			console.log(e)
		}
	}

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
					<Label htmlFor={`${address.address_name}`} className='flex flex-col'>
						<h3 className='text-base font-medium'>{address?.address_name}</h3>
						<span className='text-sm font-medium'>
							{address?.address},&nbsp;{address?.postal_code}
						</span>
					</Label>
				</div>
				<div className='flex items-center gap-4'>
					<Button
						disabled={deleteAddressLoading}
						variant='outline'
						className='h-auto border-none bg-transparent px-0 py-0 hover:bg-transparent'
						onClick={() => {
							setEditAddressModal(true)
						}}
					>
						<Pencil size={20} className='cursor-pointer text-foreground' />
					</Button>
					<Button
						disabled={deleteAddressLoading}
						variant='outline'
						className='h-auto border-none bg-transparent px-0 py-0 hover:bg-transparent'
						onClick={handleDeleteAddress}
					>
						{deleteAddressLoading && (
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
						)}
						<X size={24} className='cursor-pointer text-foreground' />
					</Button>
				</div>
			</div>
			<div className='border-b border-border'></div>

			<CreateAddressModal
				isEditingAddress={true}
				setDefaultAddress={setDefaultAddress}
				setIsEditingAddress={() => {}}
				defaultAddress={defaultAddress}
				showModal={editAddressModal}
				setShowModal={setEditAddressModal}
			/>
		</>
	)
}
