import Image from 'next/image'

import coverImg from '/public/menu-cover.jpg'

const CoverPhoto = () => {
	return (
		<div className='container'>
			<div>
				<Image
					src={coverImg}
					alt='Cover Photo'
					className='h-[200px] w-full object-cover'
				/>
			</div>
		</div>
	)
}

export default CoverPhoto
