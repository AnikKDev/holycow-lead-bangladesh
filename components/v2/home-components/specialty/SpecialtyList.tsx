import React from 'react'

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
	return (
		<div className='grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-12'>
			{specialtyItems.map((item, index) => (
				<SpecialtyItem
					key={index}
					foodImage={item.food_image}
					foodName={item.food_name}
					price={item.price}
					description={item.description}
				/>
			))}
		</div>
	)
}

export default SpecialtyList
