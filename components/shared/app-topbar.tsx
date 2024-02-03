'use client'

import { usePathname } from 'next/navigation'

import TopInformationBar from './top-information-bar'
import TopNav from './top-nav'

const AppTopBar = () => {
	const pathname = usePathname()
	if (pathname === '/login/' || pathname === '/register/') {
		return null
	}
	return (
		<>
			<TopInformationBar />
			<div className='sticky top-0 z-[1038] flex h-[75px] items-center justify-center  bg-[#E8D3A2] mobile-md:h-16'>
				<TopNav />
			</div>
		</>
	)
}

export default AppTopBar
