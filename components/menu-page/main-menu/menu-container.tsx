import MenuCategories from './menu-categories'
import MenuItems from './menu-items'

const MenuContainer = () => {
	return (
		<div className=' container'>
			<div className='grid grid-cols-[210px_1fr] gap-10'>
				{/* menu categories */}
				<MenuCategories />
				{/* menu items */}
				<MenuItems />
			</div>
		</div>
	)
}

export default MenuContainer
