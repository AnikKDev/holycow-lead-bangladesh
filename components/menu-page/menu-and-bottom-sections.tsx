'use client'

import { useCallback, useEffect, useRef } from 'react'

import useIntersectionObserver from '@/hooks/useIntersectionObserer'

import InformationSection from './location-detail/information-section'
import MenuContainer from './main-menu/menu-container'

import './main-menu/menu.css'

import { cn } from '@/lib/utils'

import GalleryPhotos from './gallery-lightbox/gallery-photos'
import MenuNavbar from './menu-navbar'
import AllReviews from './reviews/all-reviews'

const MenuAndAllBottomSections = ({
	isRestaurant = false,
}: {
	isRestaurant?: boolean
}) => {
	const targetRef = useRef<HTMLDivElement>(null)
	const informationRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const targetItemEntry = useIntersectionObserver(targetRef, {
		threshold: 0,
		rootMargin: '0px 0px 0px 0px',
	})
	const informationEntry = useIntersectionObserver(informationRef, {
		threshold: 0,
		rootMargin: '-70px 0px 0px 0px',
	})

	useEffect(() => {
		if (
			!targetItemEntry?.isIntersecting &&
			targetRef?.current &&
			menuRef?.current
		) {
			console.log('intersection false', targetItemEntry)

			// menuRef.current.style.position = 'fixed'
			menuRef.current.style.zIndex = '1060'
			menuRef.current.style.top = '0'
			menuRef.current.style.opacity = '1'
		} else {
			if (targetItemEntry?.isIntersecting && menuRef?.current) {
				// menuRef.current.style.position = 'relative'
				menuRef.current.style.zIndex = '10'
				menuRef.current.style.top = '-65'
				menuRef.current.style.opacity = '0'
			}
		}
	}, [targetRef, menuRef, targetItemEntry])

	useEffect(() => {
		console.log('information entry', informationEntry)
	}, [informationRef, informationEntry])

	const isTargetItemVisible = !!targetItemEntry?.isIntersecting
	const isInformationVisible = !!informationEntry?.isIntersecting
	const sectionsRef = useRef<HTMLDivElement[]>([])
	const refCallback = useCallback((element) => {
		if (element) {
			sectionsRef.current.push(element)
		}
	}, [])
	return (
		<div>
			<div
				ref={targetRef}
				className='m-0 w-full border-b-2 border-transparent p-0'
			></div>
			<div>
				<div
					// ref={menuRef}
					className={cn('translateZ-class h-[65px] w-full bg-background')}
				>
					<MenuNavbar sectionsRef={sectionsRef} isRestaurant={isRestaurant} />
				</div>
				{!targetItemEntry?.isIntersecting && (
					<div
						ref={menuRef}
						className='fixed -top-[65] z-[99999999999] h-[65px] w-full bg-background opacity-0'
					>
						{/* navbar placeholder */}
						<MenuNavbar sectionsRef={sectionsRef} isRestaurant={isRestaurant} />
					</div>
				)}
			</div>

			<div className='mx-auto max-w-[1200px]' ref={refCallback} id='menu'>
				<MenuContainer
					isRestaurant={isRestaurant}
					isTargetItemVisible={isTargetItemVisible}
					isInformationVisible={isInformationVisible}
				/>
			</div>

			<div ref={informationRef}>
				<div
					className='mx-auto max-w-[1200px]'
					id='information'
					ref={refCallback}
				>
					<InformationSection />
				</div>
				{isRestaurant && (
					<div
						className='mx-auto max-w-[1200px]'
						id='gallery'
						ref={refCallback}
					>
						<GalleryPhotos />
					</div>
				)}
				<div className='mx-auto max-w-[1200px]' id='reviews' ref={refCallback}>
					<AllReviews />
				</div>
			</div>
		</div>
	)
}

export default MenuAndAllBottomSections
