import { GoClock } from 'react-icons/go'

import { Button } from '@/components/ui/button'

const CollectionTimeSection = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<GoClock size={22} className='text-foreground' />
				<div>
					<h3 className='text-base font-medium'>Collection Time</h3>
				</div>
			</div>
			<div>
				<Button className='h-7 rounded-full px-5' size='sm'>
					Schedule
				</Button>
			</div>
		</div>
	)
}

export default CollectionTimeSection
