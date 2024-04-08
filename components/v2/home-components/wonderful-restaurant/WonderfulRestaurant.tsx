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
	{
		'item-name': 'image 4',
		image: '/restaurant/04.png',
	},
	{
		'item-name': 'image 5',
		image: '/restaurant/05.png',
	},
	{
		'item-name': 'image 6',
		image: '/restaurant/06.png',
	},
	{
		'item-name': 'image 7',
		image: '/restaurant/07.png',
	},
	{
		'item-name': 'image 8',
		image: '/restaurant/08.png',
	},
]
const WonderfulRestaurant = (props: Props) => {
	return (
		<div className='relative mx-auto my-24 max-w-5xl px-4'>
			<SectionHeader
				title='Come for our fresh, delicious fare, and stay for a dining experience you won’t forget.'
				subTitle='Wonderful Restaurant'
				subTitleSize='medium'
			/>
			<CarousalSection restaurantImages={restaurantImages} />
		</div>
	)
}

export default WonderfulRestaurant
