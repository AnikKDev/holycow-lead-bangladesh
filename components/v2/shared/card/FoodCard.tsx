import { FoodItemProps } from '@/types'
import { FaPepperHot } from 'react-icons/fa'

const FoodCard = ({
	food_name,
	description,
	price,
	peppers,
}: FoodItemProps) => {
	return (
		<article className='flex flex-col gap-5 font-lora tracking-[0.04em] text-foreground'>
			<div className='flex justify-between text-[22px] font-semibold leading-[1.3]'>
				{food_name && (
					<>
						<h5 className='mt-4 flex items-center gap-2'>
							{food_name}
							<span className='flex'>
								{peppers && <GeneratePeppers peppers={peppers} />}
							</span>
						</h5>
						{price && <span>£{price}</span>}
					</>
				)}
			</div>
			<hr className='border-t border-dotted border-[#1A1301]' />
			{description && (
				<p className='text-lg leading-[1.7] text-[#414141]'>{description}</p>
			)}
		</article>
	)
}

export default FoodCard

const GeneratePeppers = ({ peppers }: { peppers?: number }) => {
	return <>{Array(peppers).fill(<FaPepperHot />)}</>
}
