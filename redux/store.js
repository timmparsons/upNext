import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { userReducer, moviesReducer } from './slices';
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  }
}, applyMiddleware(thunk))