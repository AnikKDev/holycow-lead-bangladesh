import Link from 'next/link'

import { Button } from '@/components/ui/button'

import SectionHeader from '../../shared/SectionHeader'
import SpecialtyList from './SpecialtyList'

type Props = {}

const Specialty = (props: Props) => {
	return (
		<section className='mx-auto my-24 flex max-w-5xl flex-col items-center gap-8 px-4 md:gap-24'>
			<SectionHeader
				subTitle='OUR Specialty'
				title='Menu that fits you palette'
			/>
			<SpecialtyList />
			<div className='py-2'>
				<Link href={'/takeaway-menu'}>
					<Button className=''>Explore Menu</Button>
				</Link>
			</div>
		</section>
	)
}

export default Specialty
