'use client'

import React, { useState } from 'react'

import { takeawayLocationsListData } from '@/components/shared/data'

import TakeawayLocationInput from '../shared/takeaway-locations/TakeawayLocationInput'
import TakeawayLocationsList from '../shared/takeaway-locations/TakeawayLocationsList'

type Props = {}

const TakeawayLocationFilter = (props: Props) => {
	const [searchInput, setSearchInput] = useState('')

	const filteredLocations = takeawayLocationsListData.filter((location) =>
		location.postcode.some(
			(postcode) => postcode.toLowerCase() === searchInput.toLowerCase()
		)
	)

	const filteredItemsLocation = takeawayLocationsListData.filter((location) =>
		location.postcode.some((postcode) =>
			postcode.toLowerCase().includes(searchInput.toLowerCase())
		)
	)

	const uniquePostcodes = (): string[] => {
		const uniquePostcodeSet = new Set<string>()

		filteredItemsLocation.forEach(({ postcode }) => {
			postcode.forEach((code) => {
				uniquePostcodeSet.add(code)
			})
		})

		const uniquePostcodeList = Array.from(uniquePostcodeSet)
		return uniquePostcodeList
	}

	return (
		<div className='flex w-full flex-col items-center gap-8 md:gap-16'>
			<TakeawayLocationInput
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				uniquePostcodes={uniquePostcodes()}
			/>
			<TakeawayLocationsList
				takeawayLocationsList={
					searchInput === '' ? takeawayLocationsListData : filteredLocations
				}
			/>
		</div>
	)
}

export default TakeawayLocationFilter
