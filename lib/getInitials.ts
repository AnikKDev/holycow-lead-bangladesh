export const getInitials = (str: string) => {
	return str
		.split(' ')
		.map((name) => name[0])
		.join('')
		.toUpperCase()
}
