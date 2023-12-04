import AddressContainer from '@/components/account/address/address-container'

type Props = {}

export default function ViewAddress({}: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-xl font-medium'>Addresses</h2>
			<AddressContainer />
		</div>
	)
}
