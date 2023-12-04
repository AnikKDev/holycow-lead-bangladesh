import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import { slides } from './data'

import 'yet-another-react-lightbox/styles.css'

import {
	Download,
	Fullscreen,
	Thumbnails,
	Zoom,
} from 'yet-another-react-lightbox/plugins'

import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import GalleryPhotos from './gallery-photos'

function LightboxComp() {
	// const [open, setOpen] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(-1)

	return (
		<>
			{/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

			<GalleryPhotos
				data={slides}
				onClick={(currentIndex) => setIndex(currentIndex)}
			/>

			<Lightbox
				plugins={[Download, Fullscreen, Zoom, Thumbnails]}
				captions={{
					showToggle: true,
					descriptionTextAlign: 'end',
				}}
				// open={open}
				// close={() => setOpen(false)}

				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={slides}
			/>
		</>
	)
}

export default LightboxComp
