import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetTakeawayInformationQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice';
import { GuestInfo, selectOrderState, setOrderState } from '@/redux/slices/orderSlice/orderSlice';
import { useParams } from 'next/navigation';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';



import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';



import { getActualFetchedLocationName } from '@/lib/utils';
import { PostcodeCombobox } from './postcode-combobox';


export const GuestInfoFormModal = ({
	showModal,
	setShowModal,
	isEditInfo,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	isEditInfo: boolean
}) => {
	const params = useParams()
	const location = params.location as string
	const dispatch = useAppDispatch()
	const orderState = useAppSelector(selectOrderState)
	console.log(orderState)
	const { data, isLoading, isError } = useGetTakeawayInformationQuery(
		getActualFetchedLocationName(location)
	)
	const [values, setValues] = useState<GuestInfo>(orderState.guest_info)
	const handleInputChange = (e) => {
		const { id, value } = e.target
		console.log({ id, value })
		setValues({
			...values,
			[id]: value,
		})
	}
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(
			setOrderState({
				...orderState,
				guest_info: values,
			})
		)
		setShowModal(false)
	}

	useEffect(() => {
		if (!isLoading && data) {
		}
	}, [isLoading, data])
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<form onSubmit={handleSubmit}>
						<DialogHeader className='border-b  border-border pb-5 pt-5 text-center'>
							<DialogTitle>{isEditInfo ? 'Edit Info' : 'Add Info'}</DialogTitle>
						</DialogHeader>
						<div className='flex flex-col space-y-4 px-5 py-4'>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='name'>Name *</Label>
								<Input
									required
									value={values.name}
									type='string'
									id='name'
									placeholder='e.g. Jane Doe'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='email'>Email *</Label>
								<Input
									required
									value={values.email}
									type='string'
									id='email'
									placeholder='e.g. example@gmail.com'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='phone_number'>Phone Number *</Label>
								<Input
									required
									value={values.phone_number}
									type='string'
									id='phone_number'
									placeholder='e.g. 02XXXXXXX'
									onChange={handleInputChange}
								/>
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='post_code'>Postcode *</Label>
								{isLoading ? (
									'Getting postcodes'
								) : data && data?.delivery_areas.length > 0 ? (
									<PostcodeCombobox
										options={data.delivery_areas.map((item) => ({
											value: item.toLowerCase(),
											label: item,
										}))}
										selectedValue={values?.post_code?.toLowerCase()}
										onChange={(value) => {
											setValues({ ...values, post_code: value.toUpperCase() })
										}}
									/>
								) : (
									'No postcode found'
								)}
							</div>
							<div className='grid w-full items-center gap-1.5'>
								<Label htmlFor='address'>Address *</Label>
								<Input
									required
									value={values.address}
									type='string'
									id='address'
									placeholder='e.g. 555  Main st'
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<DialogFooter className='mt-2 flex-col gap-2 border-t border-border pb-4 pt-4'>
							<div className='px-5'>
								<div className='flex w-full items-center gap-2.5'>
									<Button
										type='submit'
										variant='default'
										size='lg'
										className='w-full rounded-full'
									>
										Submit
									</Button>
									<Button
										type='button'
										variant='outline'
										size='lg'
										className='w-full rounded-full'
										onClick={() => {
											setShowModal(false)
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