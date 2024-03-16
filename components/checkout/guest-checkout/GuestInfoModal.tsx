import { Dispatch, SetStateAction, useState } from 'react'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetTakeawayInformationQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import * as z from 'zod'

import { ukPhoneRegex } from '@/lib/validations/string'
import AutoForm from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

// Define your form schema using zod
const formSchema = z.object({
	name: z
		.string({
			required_error: 'Full name is required.',
		})
		.describe('Full name')
		// You can use zod's built-in validation as normal
		.min(2, {
			message: 'Full name must be at least 3 characters.',
		}),

	email: z
		.string({
			required_error: 'Email is required.',
		})
		.email({
			message: 'Invalid email address',
		}),
	phone_number: z
		.string({
			required_error: 'Phone number is required.',
		})
		// Use the "describe" method to set the label
		// If no label is set, the field name will be used
		// and un-camel-cased
		.describe('Phone number')
		.regex(ukPhoneRegex, {
			message: 'Invalid phone number.',
		}),
	post_code: z
		.string({
			required_error: 'Phone number is required.',
		})
		.describe('Post code'),
	address: z
		.string({
			required_error: 'Address is required',
		})
		.describe('Address')
		.min(5, {
			message: 'Address must be at least 5 characters long.',
		}),
})

export function GuestInfoFormModal({
	showModal,
	setShowModal,
	isEditInfo,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	isEditInfo: boolean
}) {
	const dispatch = useAppDispatch()
	const orderState = useAppSelector(selectOrderState)
	console.log(orderState)
	const params = useParams()
	const location = params.location as string
	const { data, isLoading, isError } = useGetTakeawayInformationQuery(location)
	const [values, setValues] = useState<z.infer<typeof formSchema>>(
		orderState.guest_info
	)
	const handleFormSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
		dispatch(
			setOrderState({
				...orderState,
				guest_info: data,
			})
		)
		setShowModal(false)
	}

	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden p-0'>
					<DialogHeader className='border-b border-border pb-5 pt-5 text-center'>
						<DialogTitle>{isEditInfo ? 'Edit Info' : 'Add Info'}</DialogTitle>
					</DialogHeader>

					<AutoForm
						onSubmit={handleFormSubmit}
						formSchema={formSchema}
						values={values}
						onParsedValuesChange={setValues}
						containerClassName='grid space-y-2.5 px-5'
						// className=''
						fieldConfig={{
							address: {
								inputProps: {
									// defaultValue: bookingState?.first_name,
									// value: bookingState?.first_name,
								},
							},
						}}
					>
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
					</AutoForm>
				</DialogContent>
			</Dialog>
		</>
	)
}
