import { MdOutlineStar } from 'react-icons/md'

const ReviewStars = ({ count }: { count: number }) => {
	return (
		<div className='flex items-center gap-1.5'>
			{Array(5).map((item, idx) =>
				idx + 1 <= count ? (
					<MdOutlineStar size={18} className='text-[#FAAE1D]' />
				) : (
					<MdOutlineStar size={18} className='text-[#CCCCCC]' />
				)
			)}
		</div>
	)
}

export default ReviewStars
