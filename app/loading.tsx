import React from 'react'

type Props = {}

export default function Loading({}: Props) {
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<span className='loader'></span>
		</div>
	)
}
