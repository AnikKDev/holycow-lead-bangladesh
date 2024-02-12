import SectionHeader from '../../shared/SectionHeader'
import CarousalSection from './CarousalSection'

type Props = {}
const restaurantImages = [
	{
		'item-name': 'image 1',
		image: '/restaurant/01.png',
	},
	{
		'item-name': 'image 2',
		image: '/restaurant/02.png',
	},
	{
		'item-name': 'image 3',
		image: '/restaurant/03.png',
	},
]
const WonderfulRestaurant = (props: Props) => {
	return (
		<div className='container my-14 space-y-10 p-10 mobile-md:space-x-5 md:my-[144px]'>
			<SectionHeader
				title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget.'
				subTitle='Wonderful Restaurant'
				containsAlign='left'
				subTitleSize='medium'
			/>
			<CarousalSection restaurantImages={restaurantImages} />
		</div>
	)
}

export default WonderfulRestaurant
