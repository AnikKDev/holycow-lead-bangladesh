import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
	selectMenuSearchTerm,
	setSearchTerm,
} from '@/redux/slices/menuPageSlice/menuPageSlice'
import { IoSearchSharp } from 'react-icons/io5'

import { IconInput } from '../ui/IconInput'

const SearchBar = () => {
	const searchTerm = useAppSelector(selectMenuSearchTerm)
	const dispatch = useAppDispatch()
	const icon = <IoSearchSharp size={18} className='text-foreground' />
	return (
		<div>
			<IconInput
				placeholder='search menu items'
				icon={icon}
				className='flex h-9 items-center justify-center overflow-hidden rounded-full'
				rounded
				value={searchTerm}
				onChange={(e) => {
					dispatch(setSearchTerm(e.target.value))
				}}
			/>
		</div>
	)
}

export default SearchBar
