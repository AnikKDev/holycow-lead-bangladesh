import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/nav_logo.png'

type Props = {
	storeName: string
	storeAddress: string[]
	storePhone: string
	storeLocation: string
}

const TakeawayLocationsCard = ({
	storeName,
	storeAddress,
	storePhone,
	storeLocation,
}: Props) => {
	return (
		<article className='relative text-primary'>
			<div
				className='relative z-20 mx-4 my-[22px] mt-4 flex max-h-[355px] flex-col items-center gap-5 rounded-3xl border-t border-[#905A09] bg-[#F3F2EB] px-5 pb-6 pt-9'
				style={{
					boxShadow:
						'0px 39px 16px rgba(144, 90, 9, 0.01), 0px 22px 13px rgba(144, 90, 9, 0.05), 0px 10px 10px rgba(144, 90, 9, 0.09), 0px 2px 5px rgba(144, 90, 9, 0.1)',
				}}
			>
				<div className='flex flex-col items-center gap-5'>
					<Image
						src={Logo}
						alt='Description of the image'
						width={80}
						height={37}
					/>
					<hr className='my-5 w-full border-t border-dotted border-[#0c0b08]' />
					<h4
						className='text-center text-lg font-semibold capitalize tracking-[0.04em]'
						style={{ lineHeight: 1.3 }}
					>
						{storeName}
					</h4>
					<div className='flex flex-col items-center gap-[6px] text-center text-base text-[#414141]'>
						<p className='text-center tracking-[0.04em]'>
							{storeAddress[0]}
							<br /> {storeAddress[1]}
						</p>
						<p
							className='flex items-center gap-1 text-sm font-semibold '
							style={{ lineHeight: 1.75 }}
						>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clip-path='url(#clip0_19_827)'>
									<path
										d='M11.6576 8.47996L9.03258 7.35496C8.92044 7.30717 8.79581 7.2971 8.67746 7.32627C8.5591 7.35544 8.45342 7.42226 8.37633 7.51668L7.21383 8.93699C5.38939 8.07679 3.92114 6.60854 3.06094 4.7841L4.48125 3.6216C4.57586 3.54465 4.64283 3.43897 4.67201 3.32056C4.70119 3.20215 4.69099 3.07745 4.64297 2.96535L3.51797 0.340354C3.46526 0.219512 3.37204 0.120849 3.25438 0.061377C3.13672 0.00190511 3.00199 -0.0146478 2.87344 0.0145726L0.435938 0.577073C0.311993 0.605694 0.201409 0.675482 0.122235 0.775045C0.0430606 0.874609 -2.85518e-05 0.998069 1.41942e-08 1.12528C1.41942e-08 7.13699 4.87266 12.0003 10.875 12.0003C11.0022 12.0004 11.1258 11.9573 11.2254 11.8781C11.325 11.7989 11.3948 11.6883 11.4234 11.5643L11.9859 9.12684C12.015 8.99765 11.9981 8.86239 11.9381 8.74433C11.8782 8.62626 11.779 8.53278 11.6576 8.47996Z'
										fill='#414141'
									/>
								</g>
								<defs>
									<clipPath id='clip0_19_827'>
										<rect width='12' height='12' fill='white' />
									</clipPath>
								</defs>
							</svg>
							<span>{storePhone}</span>
						</p>
					</div>
				</div>
				<Link
					className='v2-custom-button bg-background px-8 py-2 text-xs font-medium capitalize leading-[1.7] tracking-[0.04em]'
					href={storeLocation}
				>
					View Location
				</Link>
			</div>
			<span className='absolute bottom-0  z-10 h-1/2 w-full bg-[#E8D3A2]'></span>
		</article>
	)
}

export default TakeawayLocationsCard
