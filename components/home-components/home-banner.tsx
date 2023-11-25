import React from 'react'
import home_banner from '@/assets/homepage/home_banner.png'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import RestaurantsDialogContents from './restaurant-dialog-contents'

type Props = {}

export default function HomeBanner({}: Props) {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<div className='home-banner_background h-screen w-full  bg-cover bg-center'>
				<div className='flex h-full w-full items-center justify-center  backdrop-blur-sm backdrop-brightness-50 mobile-sm:flex-col'>
					<Button
						size='lg'
						className='mx-3 my-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
						variant='default'
					>
						Takeway
					</Button>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								size='lg'
								className='mx-3 w-72 rounded-3xl text-xl transition-all hover:bg-white hover:text-primary'
								variant='default'
							>
								Restaurants
							</Button>
						</DialogTrigger>
						{/* restaurant dialog contents */}
						<DialogContent className='sm:max-w-[425px]'>
							<RestaurantsDialogContents />
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	)
}
