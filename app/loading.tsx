import React from 'react'

type Props = {}

export default function Loading({}: Props) {
	return (
		<div className='flex min-h-[70vh] items-center justify-center'>
			<span className='loader'></span>
		</div>
	)
}
