'use client'

import { useEffect, useRef } from 'react'

import useIntersectionObserver from '@/hooks/useIntersectionObserer'

import InformationSection from './location-detail/information-section'
import MenuContainer from './main-menu/menu-container'

import './main-menu/menu.css'

import MenuNavbar from './menu-navbar'
import AllReviews from './reviews/all-reviews'

const MenuAndAllBottomSections = () => {
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

			menuRef.current.style.position = 'fixed'
			menuRef.current.style.zIndex = '1039'
			menuRef.current.style.top = '0'
		} else {
			if (targetItemEntry?.isIntersecting && menuRef?.current) {
				menuRef.current.style.position = 'relative'
				menuRef.current.style.zIndex = '10'
				menuRef.current.style.top = 'unset'
			}
		}
	}, [targetRef, menuRef, targetItemEntry])

	useEffect(() => {
		console.log('information entry', informationEntry)
	}, [informationRef, informationEntry])

	const isTargetItemVisible = !!targetItemEntry?.isIntersecting
	const isInformationVisible = !!informationEntry?.isIntersecting

	return (
		<div>
			<div
				ref={targetRef}
				className='m-0 w-full border-b-2 border-transparent p-0'
			></div>
			<div>
				<div ref={menuRef} className='translateZ-class w-full bg-background'>
					<MenuNavbar />
				</div>
				{!targetItemEntry?.isIntersecting && (
					<div className='opacity-0'>
						<MenuNavbar />
					</div>
				)}
			</div>

			<div className='mx-auto max-w-[1200px]'>
				<MenuContainer
					isTargetItemVisible={isTargetItemVisible}
					isInformationVisible={isInformationVisible}
				/>
			</div>

			<div ref={informationRef}>
				<div className='mx-auto max-w-[1200px]'>
					<InformationSection />
				</div>
				<div className='mx-auto max-w-[1200px]'>
					<AllReviews />
				</div>
			</div>
		</div>
	)
}

export default MenuAndAllBottomSections
