import Link from 'next/link'
import { footerRestaurantServicesMenu } from '@/constants/footer.constant'

const RestaurantServices = () => {
	return (
		<div className='text-center'>
			<h5 className='mb-6 text-lg font-bold text-[#0C0B08]'>
				Restaurant Services
			</h5>
			<ul className='text-[#414141]'>
				{footerRestaurantServicesMenu.map((location) => (
					<li className='mb-3 text-sm' key={location.text}>
						<Link href={location.navigateTo} className='hover:underline'>
							{location.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RestaurantServices
