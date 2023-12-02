import { IoSearchSharp } from 'react-icons/io5'

import { IconInput } from '../ui/IconInput'

const SearchBar = () => {
	const icon = <IoSearchSharp size={18} className='text-foreground' />
	return (
		<div>
			<IconInput
				placeholder='search menu items'
				icon={icon}
				className='flex h-9 items-center justify-center overflow-hidden rounded-full'
				rounded
			/>
		</div>
	)
}

export default SearchBar
