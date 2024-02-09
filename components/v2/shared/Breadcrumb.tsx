// 'use client'

// import React, { ReactNode } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// type Props = {
// 	homeElement: ReactNode
// 	separator: ReactNode
// }

// const Breadcrumb = ({ homeElement, separator }: Props) => {
// 	const paths = usePathname()
// 	const pathNames = paths.split('/').filter((path) => path)
// 	return (
// 		<div>
// 			<ul className='flex gap-2 font-lora text-lg font-semibold leading-[1.3] tracking-[0.04] text-[#EEDFC8]'>
// 				<li>
// 					<Link className='font-lora' href={'/'}>
// 						{homeElement}
// 					</Link>
// 				</li>
// 				{pathNames.length > 0 && separator}
// 				{pathNames.map((link, index) => {
// 					let href = `/${pathNames.slice(0, index + 1).join('/')}`
// 					let itemLink = link.includes('-') ? link.split('-').join(' ') : link

// 					return (
// 						<React.Fragment key={index}>
// 							<li>
// 								<Link className='font-lora capitalize' href={href}>
// 									{itemLink}
// 								</Link>
// 							</li>
// 							{pathNames.length !== index + 1 && separator}
// 						</React.Fragment>
// 					)
// 				})}
// 			</ul>
// 		</div>
// 	)
// }

// export default Breadcrumb
// <section>
// <div className='h-[480px] w-full px-16'>
// 	<div
// 		style={{
// 			backgroundImage: `url('/takeaway/hero/hero-bg.png')`,
// 			backgroundSize: 'cover',
// 			backgroundRepeat: 'no-repeat',
// 		}}
// 		className='h-full w-full overflow-hidden'
// 	>
// 		<div
// 			className='flex h-full w-full items-center justify-center bg-cover bg-no-repeat opacity-60'
// 			style={{
// 				background: `linear-gradient(78.23deg, #0B0600 74.17%, #4D412F 100.51%)`,
// 			}}
// 		>
// 			<div className='space-y-2 text-[#EEDFC8]'>
// 				<Breadcrumb
// 					homeElement={'Home'}
// 					separator={<span> {'>'} </span>}
// 				/>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </section>
