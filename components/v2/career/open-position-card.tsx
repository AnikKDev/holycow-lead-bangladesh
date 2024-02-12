import { Button } from '@/components/ui/button'

type Props = {}

export default function OpenPositionCard({}: Props) {
	return (
		<div className='my-12 space-y-8 font-lora'>
			<div
				style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
				className='rounded-lg border-background p-6'
			>
				<h2 className='text-3xl font-bold text-[#905A09]'>Store Manager</h2>
				<div className='mt-4 grid grid-cols-2 gap-4 leading-[2] tracking-[0.04em] text-primary-foreground'>
					<div>
						<p className=''>
							<span className='font-[500]'>Vacancy:</span>{' '}
							<span className='font-[400]'>01</span>
						</p>
						<p className=''>
							<span className='font-[500]'>Job Location:</span>{' '}
							<span className='font-[400]'>Putney</span>
						</p>
						<p className='f'>Job Type: Full Time</p>
						<Button className='mt-4'>View Details</Button>
					</div>
					<div>
						<p className=''>
							<span className='font-[500]'>Salary:</span>{' '}
							<span className='font-[400]'>Negotiable</span>
						</p>
						<p className=''>
							<span className='font-[400]'>Deadline:</span>{' '}
							<span className='font-[400]'>February 15, 2024</span>
						</p>
					</div>
				</div>
			</div>
			<div
				style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
				className='rounded-lg border-background p-6'
			>
				<h2 className='text-3xl font-bold text-[#905A09]'>Curry Chef</h2>
				<div className='mt-4 grid grid-cols-2 gap-4 leading-[2] text-primary-foreground'>
					<div>
						<p className=''>
							<span className='font-[500]'>Vacancy:</span>{' '}
							<span className='font-[400]'>01</span>
						</p>
						<p className=''>
							<span className='font-[500]'>Job Location:</span>{' '}
							<span className='font-[400]'>Putney</span>
						</p>
						<p className='f'>Job Type: Full Time</p>
						<Button className='mt-4'>View Details</Button>
					</div>
					<div>
						<p className=''>
							<span className='font-[500]'>Salary:</span>{' '}
							<span className='font-[400]'>Negotiable</span>
						</p>
						<p className=''>
							<span className='font-[400]'>Deadline:</span>{' '}
							<span className='font-[400]'>February 15, 2024</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
