import Image from 'next/image'
import Link from 'next/link'
import DividerLine from '@/assets/homepage/divider_line.svg'

import { Button } from '@/components/ui/button'

import HeaderTakeawayBtn from './header-takeaway-btn'

type Props = {}

const DeliveryAndDine = (props: Props) => {
	return (
		<div className='md:my-[132px]'>
			<div className='mx-auto '>
				<div className='flex flex-col items-center justify-center md:flex-row'>
					<FastDelivery />
					<Image
						className='hidden md:block'
						src={DividerLine}
						alt='divider'
					></Image>
					<FineDine />
				</div>
			</div>
		</div>
	)
}

const FastDelivery = (props: Props) => {
	return (
		<>
			<div className='m-10 text-center  md:text-right'>
				<div className='max-w-[650px] space-y-8'>
					<div className='space-y-2'>
						<h2 className='font-lora text-2xl font-semibold leading-[1.3] tracking-[0.04em] text-foreground md:text-5xl md:leading-[1.3]'>
							Fast Delivery
						</h2>
						<div className='flex items-center justify-center md:justify-end '>
							<svg
								width='40'
								height='9'
								viewBox='0 0 40 9'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='rotate-180'
							>
								<g clipPath='url(#clip0_198_419)'>
									<path
										d='M33.5026 9C37.0859 9 40.001 6.98129 40.001 4.49995C40.001 2.01861 37.0859 0 33.5026 0C30.1132 0 27.3231 1.80637 27.031 4.1018H22.3539V3.1552L0.000976562 3.1552V5.84446L22.354 5.84446V4.89798H27.0311C27.3232 7.19352 30.1132 9 33.5026 9ZM21.4908 5.04839L0.864269 5.04839V3.95161L21.4908 3.95161V5.04839ZM27.8672 4.49995C27.8672 2.45778 30.3953 0.796403 33.5027 0.796403C36.61 0.796403 39.1382 2.45778 39.1382 4.49995C39.1382 6.54222 36.61 8.2037 33.5027 8.2037C30.3953 8.2037 27.8672 6.54222 27.8672 4.49995Z'
										fill='#BD9632'
									/>
								</g>
								<defs>
									<clipPath id='clip0_198_419'>
										<rect
											width='40'
											height='9'
											fill='white'
											transform='translate(0.000976562)'
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
					<p className='font-open_sans font-[400px] leading-[1.7] tracking-[0.04em] text-[#414141] md:text-[20px] '>
						Here’s an added opportunity to experience a blend of new, inspired
						dishes that uniquely combine creativity with authenticity. Fresh
						meats and vegetables. Aromatic, piquant herbs & spices. No
						artificial colourings or preservatives. And all our dishes are
						served steaming hot into special stay-fresh packs, ready to collect,
						or be delivered to your door – within 45 minutes*
					</p>
					{/* <Button className='rounded-none bg-primary font-lora text-[16px]  font-[500px] leading-[28px] tracking-[0.04em] text-foreground'>
					Takeaway / Order Online
				</Button> */}
					<HeaderTakeawayBtn />
				</div>
			</div>
		</>
	)
}

const FineDine = (props: Props) => {
	return (
		<div className='m-10 text-center md:text-left'>
			<div className='max-w-[620px] space-y-8'>
				<div className='space-y-2'>
					<h2 className='font-lora text-2xl font-semibold leading-[1.3] tracking-[0.04em] text-foreground md:text-5xl md:leading-[1.3]'>
						Fine Dine
					</h2>
					<div className='flex items-center justify-center md:justify-start '>
						<svg
							width='40'
							height='9'
							viewBox='0 0 40 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0_198_419)'>
								<path
									d='M33.5026 9C37.0859 9 40.001 6.98129 40.001 4.49995C40.001 2.01861 37.0859 0 33.5026 0C30.1132 0 27.3231 1.80637 27.031 4.1018H22.3539V3.1552L0.000976562 3.1552V5.84446L22.354 5.84446V4.89798H27.0311C27.3232 7.19352 30.1132 9 33.5026 9ZM21.4908 5.04839L0.864269 5.04839V3.95161L21.4908 3.95161V5.04839ZM27.8672 4.49995C27.8672 2.45778 30.3953 0.796403 33.5027 0.796403C36.61 0.796403 39.1382 2.45778 39.1382 4.49995C39.1382 6.54222 36.61 8.2037 33.5027 8.2037C30.3953 8.2037 27.8672 6.54222 27.8672 4.49995Z'
									fill='#BD9632'
								/>
							</g>
							<defs>
								<clipPath id='clip0_198_419'>
									<rect
										width='40'
										height='9'
										fill='white'
										transform='translate(0.000976562)'
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<p className='font-open_sans font-[400px] leading-[1.7] tracking-[0.04em] text-[#414141] md:text-[20px]'>
					If you want to design your own dish, we can do that too. A little
					creamier, a little hotter, a little more fenugreek? No problem. Just
					ask us and we’ll cook it to order at no extra cost. Special children’s
					meals? We’ve got those too! We want you to appreciate Indian food at
					its best, to see what can be done when you give the highest quality
					ingredients to the best Indian chefs.
				</p>
				<Button className='rounded-none bg-primary font-lora text-[16px]  font-[500px] leading-[28px] tracking-[0.04em] text-foreground'>
					<Link href={'/locations/limehouse-canary-wharf/'}>Book a table</Link>
				</Button>
			</div>
		</div>
	)
}
export default DeliveryAndDine
