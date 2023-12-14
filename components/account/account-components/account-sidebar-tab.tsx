'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { CgProfile } from 'react-icons/cg'

import { AccountTab } from '@/types/account/account.types'

type Props = {
	tab: AccountTab
}

export default function AccountSidebarTab({
	tab: { name, navigateTo, info, icon },
}: Props) {
	const pathname = usePathname()
	const router = useRouter()
	return (
		<div
			onClick={() => router.push(`/account${navigateTo}`)}
			className={`flex cursor-pointer items-center space-x-4 rounded-md border p-2 ${
				pathname.includes(navigateTo)
					? 'border-primary bg-primary/20'
					: 'border-gray-400 bg-white'
			}`}
		>
			{/* icon */}
			<div
				className={`flex h-12 w-12 items-center justify-center rounded-md border ${
					pathname.includes(navigateTo)
						? 'border-primary bg-primary text-white'
						: 'color-[#83859C] border-gray-400 bg-[#D9D9D9]'
				}`}
			>
				{/* <CgProfile className='text-3xl' /> */}
				{icon}
			</div>
			<div className='capitalize'>
				<h6 className='mb-1 text-base font-semibold'>{name}</h6>
				<span className='text-sm'>{info}</span>
			</div>
		</div>
	)
}
