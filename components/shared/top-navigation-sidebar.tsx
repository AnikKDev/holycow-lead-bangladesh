import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fancyUnderline from '@/assets/fancy-underline.svg'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { FaPinterestP } from 'react-icons/fa'
import { IoLogoTumblr } from 'react-icons/io'
import { IoLogoTiktok } from 'react-icons/io5'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

import { allTakeawayLocations } from '../home-components/date'
import { HomeShowLocationsModal } from '../home-components/home-modal'

const TopNavigationSidebarModal = ({
	showNavSidebar,
	setShowNavSidebar,
}: {
	showNavSidebar: boolean
	setShowNavSidebar: Dispatch<SetStateAction<boolean>>
}) => {
	const [showTakeawayLocations, setShowTakeawayLocations] = useState(false)

	return (
		<>
			<Sheet open={showNavSidebar} onOpenChange={setShowNavSidebar}>
				<SheetContent
					side='left'
					className=' h-full w-[400px] bg-primary p-5 mobile-sm:w-full '
					closeBtnProps={{
						containerClassName: 'top-[30px] right-[30px]',
						iconClassName: 'h-5 w-5',
					}}
				>
					<div className='flex h-full flex-col flex-nowrap gap-0 bg-[#EEEAE2] px-4 py-3 mobile-sm:w-full '>
						<SheetHeader className='shrink-0 px-3 pb-4'>
							<SheetTitle></SheetTitle>
						</SheetHeader>
						<div className=' min-h-fit grow-[1] overflow-y-auto px-3 py-4'>
							<div className='space-y-8'>
								<div className='flex flex-col gap-2.5'>
									<div className='space-y-2.5'>
										<h1 className='text-2xl font-bold text-[#905A09]'>
											Explore Menu
										</h1>
										<div>
											<Image
												src={fancyUnderline}
												className='max-h-8'
												alt='spoon'
											/>
										</div>
									</div>
									<ul className='space-y-1.5'>
										<li>
											<Link className='hover:underline' href={'/takeaway-menu'}>
												Takeaway Menu
											</Link>
										</li>
										<li>
											<Link className='hover:underline' href={'/lunch-menu'}>
												Lunch Menu
											</Link>
										</li>
										<li>
											<Link
												className='hover:underline'
												href={'/fine-dining-menu-limehouse-canary-wharf/'}
											>
												Fine Dine Menu
											</Link>
										</li>
										<li>
											<Link
												className='hover:underline'
												href={''}
												onClick={() => {
													setShowNavSidebar(false)
													setShowTakeawayLocations(true)
												}}
											>
												Online Order
											</Link>
										</li>
										<li>
											<Link
												className='hover:underline'
												href={
													'/locations/limehouse-canary-wharf-indian-restaurant/'
												}
											>
												Make a Reservation
											</Link>
										</li>
									</ul>
								</div>

								<div className='flex flex-col gap-2.5'>
									<div className='space-y-2.5'>
										<h1 className='text-2xl font-bold text-[#905A09]'>
											Holy Cow
										</h1>
										<div>
											<Image
												src={fancyUnderline}
												className='max-h-8'
												alt='spoon'
											/>
										</div>
									</div>
									<ul className='space-y-1.5'>
										<li>
											<Link className='hover:underline' href={'/about-us'}>
												About Us
											</Link>
										</li>
										<li>
											<Link className='hover:underline' href={'/contact'}>
												Contact Us
											</Link>
										</li>
										<li>
											<Link
												className='hover:underline'
												href={'/allergy-advice'}
											>
												Allergy Advice
											</Link>
										</li>
										{/* <li>
											<Link className='hover:underline' href={'/covid-19'}>
												Covid-19
											</Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<SheetFooter className='shrink-0 flex-col space-y-2 px-3 pb-4 pt-3'>
							<div>
								<Image src={fancyUnderline} className='max-h-8' alt='spoon' />
							</div>
							<div className='flex items-center gap-1.5 space-x-2'>
								<Link
									href={'https://www.instagram.com/holycowfineindianfood/'}
									target='_blank'
								>
									<Instagram size={22} />
								</Link>
								<Link
									href={'https://www.facebook.com/holycowfineindianfood/'}
									target='_blank'
								>
									<Facebook size={22} />
								</Link>
								<Link
									href={'https://twitter.com/HolyCowLondonUK/'}
									target='_blank'
								>
									<Twitter size={22} />
								</Link>
								<Link
									href={'https://www.pinterest.co.uk/HolyCowFineIndianFood/'}
									target='_blank'
								>
									<FaPinterestP size={22} />
								</Link>
								<Link
									href={'https://www.tumblr.com/holycowfineindianfood'}
									target='_blank'
								>
									<IoLogoTumblr size={22} />
								</Link>
								<Link
									href={'https://www.tiktok.com/@holycowfineindianfood/'}
									target='_blank'
								>
									<IoLogoTiktok size={22} />
								</Link>
							</div>
						</SheetFooter>
					</div>
				</SheetContent>
			</Sheet>

			{/* online order popup */}
			<HomeShowLocationsModal
				header='Select the nearest takeaway location'
				selectOptions={allTakeawayLocations}
				showModal={showTakeawayLocations}
				setShowModal={setShowTakeawayLocations}
			/>
		</>
	)
}

export default TopNavigationSidebarModal
