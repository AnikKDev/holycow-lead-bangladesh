'use client'

import { usePathname } from 'next/navigation'

import TopInformationBar from './top-information-bar'
import TopNav from './TopNav'

const AppTopBar = () => {
	const pathname = usePathname()
	if (pathname === '/login/' || pathname === '/register/') {
		return null
	}
	return (
		<>
			<TopInformationBar />
			<div className='sticky top-0 z-[1038] flex h-16 items-center justify-center border-b border-border bg-white'>
				<TopNav />
			</div>
		</>
	)
}

export default AppTopBar
