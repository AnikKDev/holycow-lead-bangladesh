import React from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { HiOutlineTruck } from 'react-icons/hi2'
import { TbFileInvoice } from 'react-icons/tb'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type Props = {}

export default function OrderDetailsEstimation({}: Props) {
	return (
		<div>
			<div className='flex items-center justify-between'>
				<h2 className='text-2xl font-bold'>Order ID: 1234567780</h2>
				{/* btns */}
				<div className='flex items-center space-x-3'>
					<Button variant='outline' className='flex items-center'>
						<TbFileInvoice className='me-1 text-2xl' />{' '}
						<span className='text-base'>Invoice</span>
					</Button>
					<Button variant='default' className='flex items-center'>
						<BsArrowRepeat className='me-1 text-2xl' />{' '}
						<span className='text-base'>Reorder</span>
					</Button>
				</div>
			</div>
			<div className='mt-6 flex items-center space-x-4 text-lg'>
				<h6 className='text-[#6B7280]'>Order date: Aug 16, 2023</h6>
				{/* separator */}
				<Separator
					orientation='vertical'
					className='h-5 border border-gray-400'
				/>
				<h6 className='flex items-center font-semibold'>
					<HiOutlineTruck className='text-3xl' />{' '}
					<span className='mx-1 text-base'>
						Estimated delivery: May 16,2023
					</span>
				</h6>
			</div>
		</div>
	)
}
