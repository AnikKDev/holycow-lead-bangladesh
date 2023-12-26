'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { CgProfile } from 'react-icons/cg'

import { AccountTab } from '@/types/account/account.types'

type Props = {
	tab: AccountTab
}

export default function AccountTabbarTab({
	tab: { name, navigateTo, info, icon },
}: Props) {
	const pathname = usePathname()
	const router = useRouter()
	return (
		<button
			onClick={() => router.push(`/account${navigateTo}`)}
			className={`me-3 flex cursor-pointer items-center justify-between  rounded-full border bg-primary p-1 px-3 text-white${
				pathname.includes(navigateTo)
					? 'border-primary bg-primary/20'
					: 'border-gray-400 bg-white'
			}`}
		>
			{/* icon */}
			{/* <CgProfile className='me-1 text-xl' /> */}
			{icon}
			<h6 className='text-base font-semibold capitalize'>{name}</h6>
		</button>
	)
}
