import { cn } from '@/lib/utils'

type Props = {
	title: string
	subTitle?: string
	containsAlign?: 'left' | 'center'
	subTitleSize?: 'large' | 'medium' | 'small'
	showSpoon?: boolean
}

const containerClasses: Record<Props['containsAlign'], string> = {
	left: 'items-start text-left',
	center: 'items-center text-center',
}

const subTitleClasses: Record<Props['subTitleSize'], string> = {
	large: 'md:text-3xl text-2xl leading-[1.3]',
	medium: 'text-xl md:text-2xl leading-[1.3]',
	small: 'text-[24px]',
}

const SectionHeader = ({
	title,
	subTitle,
	containsAlign = 'center',
	subTitleSize = 'large',
	showSpoon = true,
}: Props) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center gap-2',
				containerClasses[containsAlign]
			)}
		>
			{subTitle && (
				<h3 className='text-lg font-medium capitalize leading-snug tracking-[0.04em] text-[#905A09]'>
					{subTitle}
				</h3>
			)}
			{showSpoon && (
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
			)}

			<h2
				className={cn(
					'max-w-5xl font-medium capitalize tracking-[0.04em] text-foreground',
					subTitleClasses[subTitleSize]
				)}
			>
				{title}
			</h2>
		</div>
	)
}

export default SectionHeader
