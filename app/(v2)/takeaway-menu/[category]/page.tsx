import { Metadata } from 'next'
import Link from 'next/link'
import bg from '@/assets/v2/secondary-bg.png'

import { apiUrl } from '@/lib/constatns'
import BannerContents from '@/components/v2/shared/banner-contents'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
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
				<div className='px-2 md:px-4 _desktop-md:px-8'>
					<BannerContents text='Takeaway' image={bg.src} />
				</div>
			</GradientWrapper>
			<div className='container my-16 flex flex-col items-center gap-8 text-primary md:gap-16'>
				<h2 className='text-center font-lora text-2xl font-medium capitalize leading-[1.3] tracking-[0.03em] text-foreground md:text-[56px]'>
					Food Menu
				</h2>
				<TakeawayMenuWithSidebar />
				<Link
					className='v2-custom-button bg-primary px-8 py-2 text-sm font-medium capitalize leading-[1.7] tracking-[0.04em] text-foreground'
					href={'/'}
				>
					Order Online
				</Link>
			</div>
		</>
	)
}

export default TakeawayMenuItemPage
