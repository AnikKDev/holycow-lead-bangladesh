import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetTakeawayInformationQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import {
	selectOrderState,
	setOrderState,
} from '@/redux/slices/orderSlice/orderSlice'
import { AiOutlineShop } from 'react-icons/ai'

const CollectionAddressSection = () => {
	const params = useParams()
	const location = params.location as string
	const { data, isLoading, isError } = useGetTakeawayInformationQuery(location)
	const orderState = useAppSelector(selectOrderState)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isLoading && data) {
			dispatch(
				setOrderState({
					...orderState,
					collection_address: data?.address,
				})
			)
		}
	}, [isLoading, data])
	console.log(data, params)
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2.5'>
				<AiOutlineShop size={22} className='text-foreground' />
				<div>
					<h3 className='text-base font-medium'>
						{isLoading
							? 'Loading...'
							: isError
							  ? 'Fetch failed'
							  : data && data?.address}
					</h3>
				</div>
			</div>
		</div>
	)
}

export default CollectionAddressSection
