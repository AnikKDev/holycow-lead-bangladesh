'use client'

import { usePathname } from 'next/navigation'

import TopNavV2 from './top-nav'

const AppTopBar = () => {
	const pathname = usePathname()
	if (pathname === '/login/' || pathname === '/register/') {
		return null
	}
	return (
		<>
			<div className='sticky top-0 z-[1038] flex h-[75px] items-center justify-center  bg-primary mobile-md:h-16'>
				<TopNavV2 />
			</div>
		</>
	)
}

export default AppTopBar
