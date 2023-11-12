import { useEffect, useMemo, useRef, useState } from 'react'
import debounce from 'lodash/debounce'

export const useDebounce = (callback: () => void) => {
	const ref = useRef<any>()

	useEffect(() => {
		ref.current = callback
	}, [callback])

	const debouncedCallback = useMemo(() => {
		const func = () => {
			ref.current?.()
		}

		return debounce(func, 500)
	}, [])

	return debouncedCallback
}

export const useDebounceValue = (value: any, delay: number) => {
	// state and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		// update debouncedValue after delay
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		// Cancel the timeout if value changes (also on delay change or unmount)
		// This is how we prevent debounced value from updating if value is changed ...
		// .. within the delay period. Timeout gets cleared and restarted.
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay]) // only recall effect if value or delay changes

	return debouncedValue
}
