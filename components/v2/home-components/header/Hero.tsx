import Link from 'next/link'
import bg from '@/assets/homepage/hero_banner.png'

import { Button } from '@/components/ui/button'

type Props = {}

const hero = (props: Props) => {
	return (
		<div className='mx-auto px-4 _desktop-md:px-10'>
			<div
				style={{ background: `url(${bg.src})` }}
				className='h-full w-full overflow-hidden rounded-2xl bg-cover bg-no-repeat'
			>
				<div className='flex h-full w-full items-center justify-center bg-gradient-to-b from-[#0B0600]/70 to-[#4D412F]/70 bg-cover bg-no-repeat py-8 _desktop-md:py-[184px]'>
					<div className='flex  max-w-[1627px] flex-col items-center justify-center gap-8 text-center '>
						<div className='space-y-2 text-[#EEDFC8]'>
							<p className='text-center font-lora text-lg font-medium leading-[1.3] tracking-[0.04em]'>
								Chase the new Flavour
							</p>
							<div className='flex items-center justify-center'>
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
						<div>
							<h1 className='sm:text-6x flex flex-col text-center font-lora text-3xl font-semibold leading-[1.3] tracking-[0.04em] text-[#DCCA87]'>
								<span>Style, Quality, Creativity, Refinement,</span>
								<span>but above all Taste!</span>
							</h1>
						</div>
						<p className='font-open-sans max-w-[961px] text-center text-lg font-medium leading-[1.75] tracking-[0.04em] text-[#EEDFC8]'>
							Everyone who knows and loves quality Indian food recognises the
							importance of well prepared, fresh ingredients. Yet here’s an
							added opportunity to experience a blend of new, inspired dishes
							that uniquely combine creativity with authenticity.
						</p>
						<Link href={'/takeaway-menu'}>
							<Button className='rounded-none bg-primary font-lora text-[16px]  font-[500px] leading-[28px] tracking-[0.04em] text-foreground'>
								Explore Menu
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default hero
