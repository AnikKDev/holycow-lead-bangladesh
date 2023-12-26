type Props = {}

export default function OrderDetailsAddress({}: Props) {
	return (
		<div>
			<h3 className='mb-3 mt-8 text-lg font-medium capitalize'>
				Delivery address/pickup address
			</h3>
			<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
				847 Jewess Bridge Apt.
			</h4>
			<h4 className='mb-3 text-base font-medium capitalize text-gray-500'>
				174 London, UK
			</h4>
		</div>
	)
}
