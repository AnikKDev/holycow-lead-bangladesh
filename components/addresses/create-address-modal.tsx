'use client'

import { Dispatch, FormEvent, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	useCreateAddressMutation,
	useUpdateAddressMutation,
} from '@/redux/slices/accountSlice/addressSlice/addressApiSlice'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { Loader2 } from 'lucide-react'
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

import { addressInitialState } from '../checkout/delivery/delivery-address'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export function CreateAddressModal({
	isEditingAddress,
	showModal,
	setShowModal,
	defaultAddress,
	setIsEditingAddress,
	setDefaultAddress,
	isFormCheckout = false,
}: {
	showModal: boolean
	isEditingAddress: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	setDefaultAddress: Dispatch<SetStateAction<AccountAddress>>
	setIsEditingAddress: Dispatch<SetStateAction<boolean>>
	defaultAddress: AccountAddress
	isFormCheckout?: boolean
}) {
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()
	// const [editedAddress, setEditedAddress] = useState({ ...defaultAddress });
	const [
		createAddress,
		{
			isLoading: createAddressLoading,
			isSuccess: createAddressSuccess,
			isError: isCreateAddressError,
			error: createAddressError,
		},
	] = useCreateAddressMutation()
	const [
		updateAddress,
		{
			isLoading: updateAddressLoading,
			isSuccess: updateAddressSuccess,
			isError: isUpdateAddressError,
			error: updateAddressError,
		},
	] = useUpdateAddressMutation()
	const handleInputChange = (e) => {
		const { id, value } = e.target
		setDefaultAddress({
			...defaultAddress,
			[id]: value,
		})
	}
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isEditingAddress) {
			try {
				await updateAddress({
					address: defaultAddress,
					addressId: defaultAddress.id,
				}).unwrap()
				toast.success('Successfully address updated!')
				setDefaultAddress(addressInitialState)
			} catch (e) {
				console.log(e)
				toast.error('Error updating address')
			} finally {
				setShowModal(false)
				setIsEditingAddress(false)
			}
		} else {
			try {
				const res = await createAddress(defaultAddress).unwrap()
				console.log('create address res', res)
				if (isFormCheckout) {
					dispatch(
						setOrderState({
							...orderState,
							delivery_address: res.address,
						})
					)
				}
				toast.success('Successfully address created!')
				setDefaultAddress(addressInitialState)
			} catch (e) {
				console.log(e)
				toast.error('Error creating an address!')
			} finally {
				setShowModal(false)
				setIsEditingAddress(false)
			}
		}
	}
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<form onSubmit={handleSubmit}>
						<DialogHeader className='border-b  border-border pb-5 pt-5 text-center'>
							<DialogTitle>
								{isEditingAddress ? 'Edit address' : 'Add new address'}
							</DialogTitle>
						</DialogHeader>

						<div className='flex flex-col space-y-4 px-5 py-4'>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='postcode'>Postcode *</Label>
								<Input
									required
									value={defaultAddress.postal_code}
									type='string'
									id='postal_code'
									placeholder='e.g. N9'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='address'>Address *</Label>
								<Input
									required
									value={defaultAddress.address}
									type='string'
									id='address'
									placeholder='e.g. 555  Main st'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='apt'>Apt, suite, floor</Label>
								<Input
									value={defaultAddress.apartment_number}
									type='string'
									id='apartment_number'
									placeholder='e.g. 15F'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='city'>City</Label>
								<Input
									// value={isEditingAddress ? '' : defaultAddress.city}
									type='string'
									id='city'
									placeholder='London'
									disabled
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='address_name'>Address name *</Label>
								<Input
									required
									value={defaultAddress.address_name}
									type='string'
									id='address_name'
									placeholder='e.g. Home'
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<DialogFooter className='mt-2 flex-col gap-2 border-t border-border pb-4 pt-4'>
							<div className='px-5'>
								<div className='flex w-full items-center gap-2.5'>
									<Button
										type='submit'
										disabled={updateAddressLoading || createAddressLoading}
										variant='default'
										size='lg'
										className='w-full rounded-full'
									>
										{(updateAddressLoading || createAddressLoading) && (
											<Loader2 className='mr-2 h-4 w-4 animate-spin' />
										)}
										Submit
									</Button>
									<Button
										type='button'
										disabled={updateAddressLoading || createAddressLoading}
										variant='outline'
										size='lg'
										className='w-full rounded-full'
										onClick={() => {
											setShowModal(false)
											setIsEditingAddress(false)
										}}
									>
										Cancel
									</Button>
								</div>
							</div>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}
