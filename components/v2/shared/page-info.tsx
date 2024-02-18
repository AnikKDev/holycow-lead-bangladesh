import React from 'react'

type Props = { heading: string; infoData: string }

export default function PageInfo({ heading, infoData }: Props) {
	return (
		<div className='text-center'>
			<h6 className='text-sm font-bold capitalize text-background'>
				{heading}
			</h6>
			<h4 className='text-xl font-[500] text-primary'>{infoData}</h4>
		</div>
	)
}
