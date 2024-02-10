'use client'

import React from 'react'
import { useGetSpecialityMenuQuery } from '@/redux/slices/takeawayMenuSlice/takeawayMenuSlice'

import { Skeleton } from '@/components/ui/skeleton'

import MenuFoodCard from '../../shared/card/MenuFoodCard'
import SpecialtyItem from './SpecialtyItem'

type Props = {}

const specialtyItems = [
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 1',
		price: 20,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 2',
		price: 25,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 3',
		price: 30,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 4',
		price: 35,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 5',
		price: 40,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 6',
		price: 45,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 7',
		price: 50,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
	{
		food_image: 'http://via.placeholder.com/308x300',
		food_name: 'Food Name 8',
		price: 55,
		description:
			'What makes Holy Cow Fine Indian Food so special? Style, Quality, Creativity, Refinement, but above all Taste!',
	},
]

const SpecialtyList = (props: Props) => {
	const { data, isLoading } = useGetSpecialityMenuQuery()

	if (isLoading) {
		return (
			<section className='grid grid-cols-12 gap-8'>
				<div className='col-span-3'>
					<ul className='flex flex-col gap-8'>
						<div className='space-y-2'>
							<Skeleton className='h-4 w-[250px]' />
							<Skeleton className='h-4 w-[200px]' />
						</div>
					</ul>
				</div>
			</section>
		)
	}

	return (
		<div className='grid grid-cols-1 gap-x-8  gap-y-12 md:grid-cols-2 _desktop-sm:grid-cols-3 _desktop-md:grid-cols-4'>
			{data?.data.map((item) => (
				<MenuFoodCard
					id={item.id}
					description={item.description}
					image={item.image}
					item_name={item.item_name}
					price={item.price}
				/>
			))}
		</div>
	)
}

export default SpecialtyList
