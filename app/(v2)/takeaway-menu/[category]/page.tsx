import { Metadata } from 'next'
import bg from '@/assets/v2/secondary-bg.png'

import { apiUrl } from '@/lib/constatns'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import TakeawayMenuOrderOnlineBtn from '@/components/v2/takeaway-components/takeaway-categories/takeaway-menu-order-online'
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
			<GradientWrapper>
				<BannerContents text='Takeaway' image={bg.src} />
			</GradientWrapper>
			<div className='container my-16 flex max-w-[1200px] flex-col items-center gap-8 text-foreground md:gap-16'>
				<h2 className='text-center font-lora text-3xl font-medium capitalize leading-[1.3] tracking-[0.03em] text-foreground'>
					Food Menu
				</h2>
				<TakeawayMenuWithSidebar />
				<TakeawayMenuOrderOnlineBtn />
			</div>
		</>
	)
}

export default TakeawayMenuItemPage
