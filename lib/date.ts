import { format, parse } from 'date-fns'

export function getPreviousDay(date = new Date()) {
	const previous = new Date(date.getTime())
	previous.setDate(date.getDate() - 1)

	return previous
}

export function formatTimeTo24h(timeString: string) {
	// Parse the time string, considering hours in 12-hour format and meridiem indicator
	const parsedTime = parse(timeString, 'h:mm a', new Date())

	// Format the parsed time in 24-hour format with seconds (optional)
	const formattedTime = format(parsedTime, 'HH:mm:ss')

	return formattedTime
}

export function formatTimeTo12h(timeString: string) {
	// Parse the time string, considering hours in 24-hour format
	const parsedTime = parse(timeString, 'HH:mm:ss', new Date())

	// Format the parsed time in 12-hour format with meridiem indicator
	const formattedTime = format(parsedTime, 'h:mm a')

	return formattedTime
}
