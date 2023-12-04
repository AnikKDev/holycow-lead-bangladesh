import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: 'EUR'
		notation?: Intl.NumberFormatOptions['notation']
	} = {}
) {
	const { currency = 'EUR', notation = 'compact' } = options

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
