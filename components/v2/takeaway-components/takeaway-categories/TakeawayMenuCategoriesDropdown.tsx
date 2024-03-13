'use client'

import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

type Props = {
	categories: {
		id: number
		name: string
		slug: string
	}[]

	lastPartPath: string
}

const TakeawayMenuCategoriesDropdown = ({
	categories,
	lastPartPath,
}: Props) => {
	const router = useRouter()
	const onSelectedValueChange = (e) => {
		router.replace(`/takeaway-menu/${e}`)
	}
	const placeholderText = lastPartPath
		? `${categories.find((category) => category.slug === lastPartPath)?.name}`
		: 'Select a Menu'
	return (
		<Select onValueChange={onSelectedValueChange}>
			<SelectTrigger className='w-full bg-primary font-bold capitalize text-primary-foreground'>
				<SelectValue placeholder={placeholderText} />
			</SelectTrigger>
			<SelectContent>
				{categories.map((category) => (
					<SelectItem
						value={category.slug}
						className={cn(
							'w-full px-4 font-lora text-base font-bold capitalize leading-[1.75] tracking-[0.04em]',
							lastPartPath == category.slug
								? 'bg-primary text-primary-foreground'
								: ''
						)}
					>
						{category.name.toLowerCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default TakeawayMenuCategoriesDropdown
