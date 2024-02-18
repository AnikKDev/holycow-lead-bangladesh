import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'

export function LoginRegisterModal({
	showModal,
	setShowModal,
	isCheckoutPage = false,
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	isCheckoutPage?: boolean
}) {
	const router = useRouter()
	return (
		<>
			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className='sm:max-w-[425px] max-w-[500px] overflow-hidden'>
					<DialogHeader className='text-left'>
						<DialogTitle>Login or create an account</DialogTitle>
					</DialogHeader>

					<DialogFooter className='mx-auto mt-2 w-[320px] min-w-fit  flex-col gap-4 px-1.5 pb-3 pt-2.5'>
						<div className='flex flex-col gap-[2px]'>
							<h3>Already have an account?</h3>
							<Button
								type='submit'
								className=' w-full rounded-full'
								variant='default'
								size='lg'
								onClick={() => {
									if (isCheckoutPage) {
										router.push(
											`/login?callback-url=${window.location.href}checkout`
										)
									} else {
										router.push(`/login?callback-url=${window.location.href}`)
									}
								}}
							>
								Log In
							</Button>
						</div>
						<div className='flex flex-col gap-[2px]'>
							<h3>Don’t have an account?</h3>
							<Button
								type='submit'
								className=' w-full rounded-full'
								variant='default'
								size='lg'
								onClick={() => {
									router.push('/register')
								}}
							>
								Sign Up
							</Button>
						</div>
						<div className='flex flex-col gap-[2px]'>
							<div className='relative py-2'>
								<div className='absolute inset-0 flex items-center'>
									<div className='w-full border-b border-gray-300'></div>
								</div>
								<div className='relative flex justify-center'>
									<span className='bg-background px-4 text-sm text-gray-500'>
										Or
									</span>
								</div>
							</div>
							<Button
								type='submit'
								className=' w-full rounded-full'
								variant='outline'
								size='lg'
							>
								Sign in with Google
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
