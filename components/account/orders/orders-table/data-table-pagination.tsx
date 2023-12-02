import React from 'react'

type Props = {}

export default function DatatablePagination({}: Props) {
	return (
		<div className='flex items-center justify-center space-x-1'>
			<a href='#' className='rounded-lg border px-4 py-2'>
				<span>&larr;</span>
			</a>

			<a
				href='#'
				className='rounded-lg border bg-[#EFF6FF] px-4 py-2 text-[#3B82F6]'
			>
				1
			</a>
			<a href='#' className='rounded-lg border px-4 py-2'>
				2
			</a>
			<a href='#' className='rounded-lg border px-4 py-2'>
				3
			</a>
			<a href='#' className='rounded-lg border px-4 py-2'>
				4
			</a>
			<a href='#' className='rounded-lg border px-4 py-2'>
				5
			</a>

			<a href='#' className='rounded-lg border px-4 py-2'>
				<span>&rarr;</span>
			</a>
		</div>
	)
}
