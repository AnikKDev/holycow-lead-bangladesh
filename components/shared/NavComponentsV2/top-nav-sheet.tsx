import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

import { Button } from '../../ui/button'
import { Sheet, SheetContent, SheetHeader } from '../../ui/sheet'

type Props = {
	showNavSheet: boolean
	setShowNavSheet: Dispatch<SetStateAction<boolean>>
}

export default function TopNavSheet({ showNavSheet, setShowNavSheet }: Props) {
	return (
		<>
			<Sheet open={showNavSheet} onOpenChange={setShowNavSheet}>
				<SheetContent className='flex h-full w-[300px] flex-col flex-nowrap gap-0 px-0 py-3 '>
					<SheetHeader className='shrink-0 border-b border-border px-3 pb-4'>
						{/* <SheetTitle>Cart Items({cartItems?.length})</SheetTitle> */}
						Sign up or log in
					</SheetHeader>
					<div className=' flex min-h-fit grow-[1] flex-col items-start space-y-2 overflow-y-auto px-3 py-4'>
						<Link
							href={'/register'}
							className='w-full rounded-full bg-primary/50'
						>
							<Button
								size='lg'
								className='w-full rounded-full bg-transparent px-4'
								variant='secondary'
							>
								Sign Up
							</Button>
						</Link>
						<Link href={'/login'} className='w-full rounded-full'>
							<Button
								size='lg'
								className='w-full rounded-full px-4'
								variant='secondary'
							>
								Log In
							</Button>
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</>
	)
}
