'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import NewTopNav from './new-top-nav'

const AppTopBar = () => {
	const navbarRef = useRef(null)
	const pathname = usePathname()

	const isNoRequiredOfGradientPage =
		pathname.includes('/checkout') || pathname.includes('/account')

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0 && !isNoRequiredOfGradientPage) {
				// Change the threshold as needed
				navbarRef.current.classList.add('bg-primary')
				navbarRef.current.classList.add('shadow-sm')
			} else {
				navbarRef.current.classList.remove('bg-primary')
				navbarRef.current.classList.remove('shadow-sm')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	if (pathname === '/login/' || pathname === '/register/') {
		return null
	}

	return (
		<>
			<div className='relative'>
				{/* <TopInformationBar /> */}
				<div
					ref={navbarRef}
					className={cn(
						'fixed top-0 z-[1038] flex h-[80px] w-full items-center justify-center  text-primary-foreground mobile-md:h-16',
						{
							'border-b border-border bg-background':
								isNoRequiredOfGradientPage,
						}
					)}
				>
					{/* <TopNav /> */}
					<NewTopNav />
				</div>
				{isNoRequiredOfGradientPage ? (
					<> </>
				) : (
					<div className='absolute bottom-0 left-0 right-0 top-0 z-[-1] h-[600px] bg-[linear-gradient(180deg,#E8D3A2_0%,#F3F2EB_102.18%,#FFF_102.19%)] '></div>
				)}

				<div className='h-[80px]'></div>
			</div>

			{/* <MobileNavbar /> */}
		</>
	)
}

export default AppTopBar
