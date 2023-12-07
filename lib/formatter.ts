export const decimalFormatter = (decimal: string | number) => {
	const numericDecimal = typeof decimal === 'string' ? Number(decimal) : decimal

	return Math.round(numericDecimal * 100) / 100
}
