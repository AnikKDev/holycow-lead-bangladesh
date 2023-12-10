import React from 'react'

type Props = {
	para: string
}

export default function SectionContents({ para }: Props) {
	return <p className='text-lg leading-8 text-gray-500'>{para}</p>
}
