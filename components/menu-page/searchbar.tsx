import { IoSearchSharp } from 'react-icons/io5'

import { IconInput } from '../ui/IconInput'

const SearchBar = () => {
	const icon = <IoSearchSharp size={22} className='text-foreground' />
	return (
		<div>
			<IconInput
				placeholder='search menu items'
				icon={icon}
				className='rounded-full'
				rounded
			/>
		</div>
	)
}

export default SearchBar
