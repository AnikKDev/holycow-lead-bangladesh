import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

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
}: {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}) {
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
							<Link href={'/login'}>
								<Button
									type='submit'
									className=' w-full rounded-full'
									variant='default'
									size='lg'
									// onClick={() => {
									// 	router.push(`/takeaway-location/${params.location}/checkout`)
									// }}
								>
									Login
								</Button>
							</Link>
						</div>
						<div className='flex flex-col gap-[2px]'>
							<h3>Don’t have an account?</h3>
							<Link href={'/register'}>
								<Button
									type='submit'
									className=' w-full rounded-full'
									variant='default'
									size='lg'
								>
									Register
								</Button>
							</Link>
						</div>
						<div className='flex flex-col gap-[2px]'>
							<h3>Or</h3>
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
