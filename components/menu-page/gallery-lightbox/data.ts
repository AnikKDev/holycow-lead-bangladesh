export type GalleryImageItem = {
	id: number
	src: string
	title?: string
	description?: string
}

export const slides: GalleryImageItem[] = [
	{
		id: 1,
		src: '/gallery1.jpg',
		title: 'Slide Title One',
		description: 'Slide Description One\n\nthis is new line',
	},
	{
		id: 2,
		src: '/gallery2.jpg',
		title: 'Slide Title Two',
		description: 'Slide Description Two',
	},
	{
		id: 3,

		src: '/gallery3.jpg',
		title: 'Slide Title Three',
		description: 'Slide Description Three',
	},
	{
		id: 4,

		src: '/gallery4.jpg',
		title: 'Slide Title Four',
		description: 'Slide Description Four',
	},
	{
		id: 5,

		src: '/gallery5.jpg',
		title: 'Slide Title Five',
		description: 'Slide Description Five',
	},
	{
		id: 6,
		src: '/gallery6.jpg',
		title: 'Slide Title Six',
		description: 'Slide Description Six',
	},
]
