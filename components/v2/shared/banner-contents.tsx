import Breadcrumb from './Breadcrumb'

type Props = { text: string; image: string }

export default function BannerContents({ text, image }: Props) {
	return (
		<>
			<div className='mx-auto h-[240px]'>
				<div
					style={{
						background: `url(${image}), lightgray 0px -166px / 107.143% 228.696% no-repeat`,
					}}
					className='relative h-full w-full !bg-cover !bg-center object-cover'
				>
					<div className='absolute inset-0 bg-[linear-gradient(78deg,#0B0600_74.17%,#4D412F_100.51%)] opacity-50'></div>

					<div className='relative flex h-full flex-col items-center justify-center gap-3.5'>
						<h1 className='text-center text-3xl font-medium tracking-[0.04em] text-[#DCCA87]'>
							{text}
						</h1>
						<Breadcrumb />
					</div>
				</div>
			</div>
		</>
	)
}
