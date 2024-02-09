import { Metadata } from 'next'
import Link from 'next/link'

import { apiUrl } from '@/lib/constatns'
import TakeawayMenuWithSidebar from '@/components/v2/takeaway-components/takeaway-categories/TakeawayMenuWithSidebar'

type ParamsType = {
	params: { category: string }
}

const getMenuInfo = async (category: string): Promise<string> => {
	const res = await fetch(`${apiUrl}/order/get_menu/`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})

	const data = await res.json()
	const menu = await data?.menu.find((menu) => menu.slug === category)
	if (!res.ok) {
		throw new Error('Takeaway Menu not found')
	}
	return menu.name
}

export const generateMetadata = async ({
	params,
}: ParamsType): Promise<Metadata> => {
	const menuInformation = await getMenuInfo(params.category)
	return {
		title: menuInformation,
	}
}

const TakeawayMenuItemPage = () => {
	return (
		<>
			<div className='container mt-[176px] text-primary'>
				<hr className='my-8 border-t-[0.5px] border-dotted border-[#727272] md:my-24' />

				<h2 className='my-8 text-center font-lora text-2xl font-medium capitalize leading-[1.3] tracking-[0.03em] text-primary md:my-24 md:text-[56px]'>
					Food Menu
				</h2>
				<TakeawayMenuWithSidebar />

				<Link className='capitalize ' href={'/'}>
					Order Online
				</Link>
			</div>
		</>
	)
}

export default TakeawayMenuItemPage
