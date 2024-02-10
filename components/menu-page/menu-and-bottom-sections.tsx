'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { useGetFullMenuQuery } from '@/redux/slices/menuPageSlice/menuPageApiSlice'
import { LocationInfoType } from '@/redux/slices/menuPageSlice/menuPageSlice'
import { setVisitedLocationSlug } from '@/redux/slices/orderSlice/orderSlice'

import useIntersectionObserver from '@/hooks/useIntersectionObserer'

import InformationSection from './location-detail/information-section'
import MenuContainer from './main-menu/menu-container'

import './main-menu/menu.css'

import { cn } from '@/lib/utils'

import { Skeleton } from '../ui/skeleton'
import LightboxComp from './gallery-lightbox/lightbox'
import MenuNavbar from './menu-navbar'
import AllReviews from './reviews/all-reviews'

const MenuAndAllBottomSections = ({
	isRestaurant = false,
	locationInformation,
}: {
	isRestaurant?: boolean
	locationInformation?: LocationInfoType
}) => {
	const { location } = useParams()
	const targetRef = useRef<HTMLDivElement>(null)
	const informationRef = useRef<HTMLDivElement>(null)
	const menuRef = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()
	const { data, isLoading, isError } = useGetFullMenuQuery()

	const targetItemEntry = useIntersectionObserver(targetRef, {
		threshold: 0,
		rootMargin: '-75px 0px 0px 0px',
	})
	const informationEntry = useIntersectionObserver(informationRef, {
		threshold: 0,
		rootMargin: '-70px 0px 0px 0px',
	})

	useEffect(() => {
		if (!isRestaurant) {
			dispatch(setVisitedLocationSlug(location as string))
		}
	}, [])

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
			menuRef.current.style.backgroundColor = '#F4F3EC'
		} else {
			if (targetItemEntry?.isIntersecting && menuRef?.current) {
				// menuRef.current.style.position = 'relative'
				// menuRef.current.style.zIndex = '10'
				// menuRef.current.style.top = '-65'
				// menuRef.current.style.opacity = '0'
				menuRef.current.style.backgroundColor = 'transparent'
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
					'translateZ-class  sticky top-[80px] z-[1035] w-full  bg-background transition mobile-md:top-16'
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
				className='mx-auto max-w-[1200px] scroll-mt-[100vh] mobile-md:max-w-fit'
				ref={refCallback}
				id='menu'
			>
				{isLoading ? (
					<div className='flex flex-row mobile-md:flex-col'>
						<Skeleton className='relative z-[unset] -ml-2 mr-4 flex h-[calc(100vh-75px)] min-w-[190px] flex-1 bg-muted/80 mobile-md:h-12 mobile-md:min-w-full' />
						<Skeleton className='flex h-[calc(100vh-75px)] w-full flex-col justify-center  gap-6 bg-muted/80 pt-5 mobile-md:w-screen ' />
					</div>
				) : isError ? (
					<p className='container'>Error fetching menu</p>
				) : (
					data.length > 0 && (
						<MenuContainer
							isRestaurant={isRestaurant}
							isTargetItemVisible={isTargetItemVisible}
							isInformationVisible={isInformationVisible}
						/>
					)
				)}
			</div>

			<div ref={informationRef}>
				<div
					className='mx-auto max-w-[1200px] scroll-m-32 '
					id='information'
					ref={refCallback}
				>
					<InformationSection locationInformation={locationInformation} />
				</div>
				{isRestaurant && (
					<div
						className='mx-auto max-w-[1200px] scroll-m-32 '
						id='gallery'
						ref={refCallback}
					>
						<LightboxComp />
					</div>
				)}
				<div
					className=' mx-auto max-w-[1200px] scroll-m-32'
					id='reviews'
					ref={refCallback}
				>
					<AllReviews
						locationInformation={locationInformation}
						isRestaurant={isRestaurant}
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuAndAllBottomSections
