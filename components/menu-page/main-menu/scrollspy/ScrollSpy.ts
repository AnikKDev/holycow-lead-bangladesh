import { useLayoutEffect } from 'react'

export const ScrollSpy = ({
	handleScroll,
	hasTopMenuClicked,
	setHasTopMenuClicked,
}) => {
	const isInViewPort = (entry, offset = 0) => {
		const rect = entry.boundingClientRect
		return rect.top - 1 <= 124 + offset && rect.bottom >= 0 + offset
	}

	useLayoutEffect(() => {
		const scrollables: any = document.querySelectorAll('[data-scrollspy]')
		for (let scrollable of scrollables) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						handleScroll &&
							handleScroll(
								entry,
								isInViewPort(entry),
								hasTopMenuClicked,
								() => {
									setHasTopMenuClicked(false)
								}
							)
					})
				},
				{
					root: null,
					rootMargin: '0px 0px 100% 0px',
					threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
				}
			)
			observer.observe(scrollable)
		}
	}, [handleScroll])

	return null
}
