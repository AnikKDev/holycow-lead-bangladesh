import React from 'react'

import { Button } from '@/components/ui/button'

type Props = {}

export default function HomeBanner({}: Props) {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
				<div className='flex h-full w-full items-center justify-center  backdrop-blur-sm backdrop-brightness-50 mobile-sm:flex-col'>
					<Button
						size='lg'
						className='mx-3 my-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
						variant='default'
					>
						Takeway
					</Button>
					<Button
						size='lg'
						className='mx-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
						variant='default'
					>
						Restaurants
					</Button>
				</div>
			</div>
		</div>
	)
}
