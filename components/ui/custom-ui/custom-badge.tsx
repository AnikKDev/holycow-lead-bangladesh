import React from 'react'

import { Badge } from '../badge'

type Props = {
	status: string
}

export default function CustomBadge({}: Props) {
	return <Badge variant='default'>Badge</Badge>
}
