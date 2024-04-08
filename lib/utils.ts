import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: 'GBP'
		notation?: Intl.NumberFormatOptions['notation']
	} = {}
) {
	const { currency = 'GBP', notation = 'standard' } = options

	const numericPrice = typeof price === 'string' ? parseFloat(price) : price

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice)
}

/**
 *
 *  type Lemonade = {
 *   lemon: number;
 *   water: string;
 *  }
 *
 *
 *  const SweetLemonade:Lemonade = {
 *    lemon: 2,
 *    water: '1litres',
 *    sugar: '3tbsp'
 *  }
 *  This would throw an error saying 'sugar' does not exist in type 'Lemonade'
 *
 *
 *
 *  const SweetLemonade:Extends<Lemonade> = {
 *    lemon: 2,
 *    water: '1litres',
 *    sugar: '3tbsp'
 *  }
 *  This would not throw an error anymore and you will still get the type suggestions
 *  for Lemonade type
 *
 */
export type Extend<T extends { [key: string]: any }> = T & {
	[key: string]: any
}

// capitalize first letter of a word
export function capitalizeFirstLetter(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

// calculate average rating
export function calculateAverageRating(ratings: number[]): number {
	if (ratings?.length === 0) {
		return 0 // Return 0 if there are no ratings
	}

	const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0)
	const averageRating = totalRatings / ratings.length
	return averageRating
}

export function hasAllValues(
	obj: object,
	notRequiredProperties: Array<string> = []
) {
	// Loop through each property of the object
	for (const key in obj) {
		// Check if the property is not required
		const isNotRequired = notRequiredProperties.includes(key)

		// Skip non-required properties without a value
		if (isNotRequired && !obj[key]) {
			continue
		}

		// Check if a required property has a falsy value
		if (!isNotRequired && !obj[key]) {
			return false
		}
	}
	// If no missing or falsy values found, return true
	return true
}

// location?.includes('limehouse') ? 'limehouse' : params.location
export function getActualFetchedLocationName(location: string) {
	return location?.includes('limehouse') ? 'limehouse' : location
}
