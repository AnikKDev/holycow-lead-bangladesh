import React from 'react'

type Props = {
	title: string
}

export default function SectionTitle({ title }: Props) {
	return <h2 className='my-3 text-2xl font-semibold text-primary'>{title}</h2>
}
