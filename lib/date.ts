import { format, parse } from 'date-fns'

export function getPreviousDay(date = new Date()) {
	const previous = new Date(date.getTime())
	previous.setDate(date.getDate() - 1)

	return previous
}

export function formatTimeTo24h(timeString: string) {
	// Parse the time string, considering hours in 12-hour format and meridiem indicator
	const parsedTime = parse(timeString, 'h:mm aaa', new Date())

	// Format the parsed time in 24-hour format with seconds (optional)
	const formattedTime = format(parsedTime, 'HH:mm:ss')

	return formattedTime
}

export function formatTimeTo12h(timeString: string) {
	// Parse the time string, considering hours in 24-hour format
	const parsedTime = parse(timeString, 'HH:mm:ss', new Date())

	// Format the parsed time in 12-hour format with meridiem indicator
	const formattedTime = format(parsedTime, 'h:mm aaa')

	return formattedTime
}

export function generateTimes(startTime: string): Array<string> {
	// Convert the input time string to a Date object
	const startDate = new Date(`2000-01-01 ${startTime}`)

	// Initialize an array to store the generated times
	const result = []

	// Generate the first two times before the start time
	for (let i = 2; i > 0; i--) {
		const previousTime = new Date(startDate.getTime() - i * 15 * 60 * 1000)
		result.push(formatTime(previousTime))
	}

	// Add the start time itself
	result.push(formatTime(startDate))

	// Generate the last two times after the start time
	for (let i = 1; i <= 2; i++) {
		const nextTime = new Date(startDate.getTime() + i * 15 * 60 * 1000)
		result.push(formatTime(nextTime))
	}

	return result
}

// Helper function to format the time in hh:mm am/pm format
function formatTime(date: Date) {
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const ampm = hours >= 12 ? 'pm' : 'am'

	return `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`
}
