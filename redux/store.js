import { configureStore } from '@reduxjs/toolkit'
import { userReducer, moviesReducer } from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  },
})