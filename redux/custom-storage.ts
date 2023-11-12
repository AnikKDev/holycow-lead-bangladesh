'use client'

// https://github.com/vercel/next.js/discussions/15687
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { WebStorage } from 'redux-persist/lib/types'

const createNoopStorage = () => {
	return {
		getItem(_key: any) {
			return Promise.resolve(null)
		},
		setItem(_key: any, value: any) {
			return Promise.resolve(value)
		},
		removeItem(_key: any) {
			return Promise.resolve()
		},
	}
}

const storage: WebStorage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage()

export default storage
