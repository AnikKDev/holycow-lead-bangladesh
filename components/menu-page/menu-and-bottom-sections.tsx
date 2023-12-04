'use client'

import { useCallback, useEffect, useRef } from 'react'

import useIntersectionObserver from '@/hooks/useIntersectionObserer'

import InformationSection from './location-detail/information-section'
import MenuContainer from './main-menu/menu-container'

import './main-menu/menu.css'

import { cn } from '@/lib/utils'

import LightboxComp from './gallery-lightbox/lightbox'
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
			// menuRef.current.style.zIndex = '1038'
			// menuRef.current.style.top = '64px'
			// menuRef.current.style.opacity = '1'
			menuRef.current.style.backgroundColor = 'white'
		} else {
			if (targetItemEntry?.isIntersecting && menuRef?.current) {
				// menuRef.current.style.position = 'relative'
				// menuRef.current.style.zIndex = '10'
				// menuRef.current.style.top = '-65'
				// menuRef.current.style.opacity = '0'
				menuRef.current.style.backgroundColor = '#FDFCF7'
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
			<div
				ref={menuRef}
				className={cn(
					'translateZ-class  sticky top-[64px] z-[1035]  w-full bg-background transition'
				)}
			>
				<div>
					<MenuNavbar sectionsRef={sectionsRef} isRestaurant={isRestaurant} />
				</div>
				{/* {!targetItemEntry?.isIntersecting && (
					<div
						ref={menuRef}
						className='fixed -top-[65] z-[1038] w-full bg-background opacity-0 transition'
					>
						<MenuNavbar sectionsRef={sectionsRef} isRestaurant={isRestaurant} />
					</div>
				)} */}
			</div>

			<div
				className='mx-auto max-w-[1200px] scroll-mt-[100vh]'
				ref={refCallback}
				id='menu'
			>
				<MenuContainer
					isRestaurant={isRestaurant}
					isTargetItemVisible={isTargetItemVisible}
					isInformationVisible={isInformationVisible}
				/>
			</div>

			<div ref={informationRef}>
				<div
					className='mx-auto max-w-[1200px] scroll-m-24 '
					id='information'
					ref={refCallback}
				>
					<InformationSection />
				</div>
				{isRestaurant && (
					<div
						className='mx-auto max-w-[1200px] scroll-m-24 '
						id='gallery'
						ref={refCallback}
					>
						<LightboxComp />
					</div>
				)}
				<div
					className=' mx-auto max-w-[1200px] scroll-m-24'
					id='reviews'
					ref={refCallback}
				>
					<AllReviews />
				</div>
			</div>
		</div>
	)
}

export default MenuAndAllBottomSections
