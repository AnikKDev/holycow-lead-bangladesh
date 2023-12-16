'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

const OrderBackButton = () => {
	const router = useRouter()
	return (
		<Button
			className='flex h-0 items-center gap-1 px-0 py-0'
			size='sm'
			variant='link'
			onClick={() => {
				router.back()
			}}
		>
			<ArrowLeft className='h-4 w-4' />
			My orders
		</Button>
	)
}

export default OrderBackButton
