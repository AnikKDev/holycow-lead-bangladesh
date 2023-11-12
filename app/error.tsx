'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className='grid min-h-screen place-content-center space-y-5 text-center'>
			<h1 className='text-3xl font-semibold'>There was a problem</h1>
			<p>{error.message}</p>
			<section className='grid gap-3'>
				<button onClick={() => reset()} className='font-semibold'>
					Try again
				</button>
				<button className='font-semibold'>
					<Link href='/'>Go back home</Link>
				</button>
			</section>
		</main>
	)
}
