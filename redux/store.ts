import { apiSlice } from '@/redux/services/apiSlice'
import {
	Action,
	AnyAction,
	configureStore,
	Reducer,
	ThunkAction,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
// encrypt redux-persists persisted state from local storage
import { encryptTransform } from 'redux-persist-transform-encrypt'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// import storage from "redux-persist/lib/storage"
import storage from './custom-storage'
import { rootReducer } from './reducers'

const encryptor = encryptTransform({
	secretKey: 'Super-Secret-key-25xw',
	onError: function (error) {
		// Handle the error.
		console.log(error)
	},
})

//use this set up to remove things from reducer state during migrations
//autoMergeLevel2 takes care of adding fields automatically
const persistConfig = {
	key: 'root',
	storage,
	transforms: [encryptor],
	whitelist: ['counter', 'auth', 'message'], // Things u want to persist
	blacklist: [], // Things u dont
	stateReconciler: autoMergeLevel2,
}

// when user clicks logout, reset the redux store also persist-store
const finalRootReducer: Reducer = (state: RootState, action: AnyAction) => {
	// console.log('action.type: ',action.type)
	if (action.type === 'auth/logOut') {
		// this applies to all keys defined in persistConfig(s)
		storage.removeItem('persist:root')
		state = {} as RootState
		console.log(state)
	}
	return rootReducer(state, action)
}

// https://github.com/reduxjs/redux-toolkit/issues/324#issuecomment-1005121591
// const persistedReducer = persistReducer( persistConfig, rootReducer as Reducer );
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
	persistConfig,
	finalRootReducer
)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
