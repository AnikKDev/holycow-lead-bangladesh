import { useState } from 'react'
import { GoClock } from 'react-icons/go'

const DeliveryTimeArea = () => {
	const [selectedTime, setSelectedTime] = useState('As soon as possible')
	return (
		<div>
			<div className='grid grid-cols-[auto,1fr] gap-2.5'>
				<div>
					<GoClock size={22} className='text-foreground' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<h3 className='text-base font-medium'>Delivery time</h3>
						<span className='text-sm font-medium'>As soon as possible</span>
					</div>
					{/* delivery time selection */}
					<div>
						<fieldset className='flex flex-row items-center gap-4'>
							<legend className='sr-only'>Delivery</legend>

							<div className='basis-2/5'>
								<input
									type='radio'
									name='DeliveryOption'
									value='DeliveryStandard'
									id='DeliveryStandard'
									className='peer hidden [&:checked_+_label_svg]:block'
									checked={selectedTime === 'As soon as possible'}
									onChange={(e) => {
										setSelectedTime('As soon as possible')
									}}
								/>

								<label
									htmlFor='DeliveryStandard'
									className='block cursor-pointer rounded-lg border border-border bg-white px-2.5 py-2 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-foreground peer-checked:ring-1 peer-checked:ring-foreground'
								>
									<div className='flex items-center justify-between'>
										<p className='whitespace-nowrap text-base font-semibold text-foreground'>
											Standard
										</p>

										<svg
											className='hidden h-5 w-5 text-foreground'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fill-rule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
												clip-rule='evenodd'
											/>
										</svg>
									</div>

									<p className='mt-1 text-sm text-foreground'>
										As soon as possible
									</p>
								</label>
							</div>

							<div className='basis-[45%]'>
								<input
									type='radio'
									name='DeliveryOption'
									value='DeliveryPriority'
									id='DeliveryPriority'
									className='peer hidden [&:checked_+_label_svg]:block'
									checked={selectedTime === 'Schedule for later'}
									onChange={(e) => {
										setSelectedTime('Schedule for later')
									}}
								/>

								<label
									htmlFor='DeliveryPriority'
									className='block cursor-pointer rounded-lg border border-border bg-white px-2.5 py-2 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-foreground  peer-checked:ring-1 peer-checked:ring-foreground'
								>
									<div className='flex items-center justify-between'>
										<p className='whitespace-nowrap text-base font-semibold text-foreground'>
											Schedule for later
										</p>

										<svg
											className='hidden h-5 w-5 text-foreground'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path
												fill-rule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
												clip-rule='evenodd'
											/>
										</svg>
									</div>

									<p className='mt-1 text-sm text-foreground'>Choose a time</p>
								</label>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeliveryTimeArea
