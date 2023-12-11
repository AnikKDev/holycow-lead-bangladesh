import Image from 'next/image'
import Link from 'next/link'
import nav_logo from '@/assets/nav_logo.png'
import { IoMdArrowBack } from 'react-icons/io'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

type IMainProps = {
	children: React.ReactNode
	hideBackBtn?: boolean
	handleBackBtn?: () => void
}

const AuthLayoutContainer = (props: IMainProps) => {
	return (
		<section>
			<div className='sticky top-0 z-[1038] flex h-28 items-center justify-center border-b border-border bg-white'>
				<nav
					className={cn('container flex items-center justify-between', {
						'justify-center': props?.hideBackBtn,
					})}
				>
					<div>
						<Link href={'/'}>
							<Image
								src={nav_logo}
								className='h-auto w-48 mobile-md:w-28'
								alt='holy cow logo'
							/>
						</Link>
					</div>
					{/* nav options */}
					<div className='flex items-center space-x-2.5'>
						{!props?.hideBackBtn && (
							<Button
								onClick={props?.handleBackBtn}
								size='sm'
								className='flex items-center gap-1.5 rounded-md'
								variant='outline'
							>
								<IoMdArrowBack className=' text-xl text-primary text-opacity-70 mobile-lg:text-sm' />
								<span>Go Back</span>
							</Button>
						)}
					</div>
				</nav>
			</div>
			<div className='container m-auto grid h-[calc(100vh-64px)] max-w-md'>
				{props.children}
			</div>
		</section>
	)
}

export default AuthLayoutContainer
