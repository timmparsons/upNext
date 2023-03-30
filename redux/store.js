import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { userReducer, moviesReducer } from './slices';
import thunk from "redux-thunk";
import { tmdbApi } from './slices/tmdbApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
		movies: moviesReducer,
		[tmdbApi.reducerPath]: tmdbApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
}, applyMiddleware(thunk))