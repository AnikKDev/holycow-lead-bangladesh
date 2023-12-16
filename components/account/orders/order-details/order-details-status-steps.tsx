type Props = {
	title: string
	description: string
	completed: boolean
}

export default function OrderDetailsStatusSteps({
	title,
	description,
	completed,
}: Props) {
	return (
		<li
			className={`c-stepper__item ${
				completed ? 'c-stepper__item__completed' : ''
			}`}
		>
			<h3 className='font-medium capitalize'>{title}</h3>
			<p className='c-stepper__desc text-base uppercase text-[#6F6F6F]'>
				{description}
			</p>
		</li>
	)
}
