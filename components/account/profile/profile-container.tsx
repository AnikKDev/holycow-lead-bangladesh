import React from 'react'
import { HiOutlinePencil } from 'react-icons/hi'

type Props = {}

export default function ProfileContainer({}: Props) {
	return (
		<div className='rounded-lg border border-[#D1D5DB] bg-white'>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center justify-between p-6'>
					{/* name */}
					<div className='leading-9'>
						<h5 className='text-lg'>Name</h5>
						<span className='text-sm text-[#6B6B83]'>John Doe</span>
					</div>
					{/* icon */}
					<div className='flex items-center'>
						<HiOutlinePencil className='mr-2' />
						<span>Edit</span>
					</div>
				</div>
			</div>
			{/* seactions */}
			<div className='border-b border-[#D1D5DB]'>
				<div className='flex items-center justify-between p-6'>
					{/* name */}
					<div className='leading-9'>
						<h5 className='text-lg'>Name</h5>
						<span className='text-sm text-[#6B6B83]'>John Doe</span>
					</div>
					{/* icon */}
					<div className='flex items-center'>
						<HiOutlinePencil className='mr-2' />
						<span>Edit</span>
					</div>
				</div>
			</div>
			{/* seactions */}
			<div>
				<div className='flex items-center justify-between p-6'>
					{/* name */}
					<div className='leading-9'>
						<h5 className='text-lg'>Name</h5>
						<span className='text-sm text-[#6B6B83]'>John Doe</span>
					</div>
					{/* icon */}
					<div className='flex items-center'>
						<HiOutlinePencil className='mr-2' />
						<span>Edit</span>
					</div>
				</div>
			</div>
		</div>
	)
}
