'use client'

import { persistor, store } from '@/redux/store'
import { PropsWithChildren } from 'react'
import { CookiesProvider } from 'react-cookie'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

interface IReduxProviderProps {}
export function ReduxProvider({ children }: PropsWithChildren<IReduxProviderProps>) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<CookiesProvider>{children}</CookiesProvider>
				</PersistGate>
			</Provider>
			<Toaster position='top-center' />
		</>
	)
}
