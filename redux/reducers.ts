import {
	ActionFromReducersMapObject,
	combineReducers,
	Reducer,
	StateFromReducersMapObject,
} from '@reduxjs/toolkit'

import { apiSlice } from './services/apiSlice'
import authSlice from './slices/authSlice/authSlice'
import counterSlice from './slices/counter/counterSlice'
import menuPageSlice from './slices/menuPageSlice/menuPageSlice'
import orderSlice from './slices/orderSlice/orderSlice'

// all the reducers/slices we create should be inside combine reducers
const allReducer = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	counter: counterSlice,
	auth: authSlice,
	menuPage: menuPageSlice,
	order: orderSlice,
}

type ReducersMapObject = typeof allReducer

// combine all reducers
export const rootReducer: Reducer<
	StateFromReducersMapObject<ReducersMapObject>,
	ActionFromReducersMapObject<ReducersMapObject>
> = combineReducers(allReducer)
