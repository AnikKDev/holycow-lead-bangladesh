'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa6'

const Breadcrumb = () => {
	const paths = usePathname()
	const pathNames = paths.split('/').filter((path) => path)
	return (
		<div>
			<ul className='flex items-center gap-2 font-lora text-base font-medium leading-[1.3] tracking-[0.04] text-[#EEDFC8]'>
				<li>
					<Link className='font-lora' href={'/'}>
						Home
					</Link>
				</li>
				{pathNames.length > 0}
				{pathNames.map((link, index) => {
					let href = `/${pathNames.slice(0, index + 1).join('/')}`
					let itemLink = link.includes('-') ? link.split('-').join(' ') : link

					return (
						<React.Fragment key={index}>
							<li>
								<FaChevronRight />
							</li>
							<li>
								<Link className='font-lora capitalize' href={href}>
									{itemLink}
								</Link>
							</li>

							{pathNames.length !== index + 1}
						</React.Fragment>
					)
				})}
			</ul>
		</div>
	)
}

export default Breadcrumb
