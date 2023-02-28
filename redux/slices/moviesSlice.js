import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieList: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { payload } = action;
      state.movieList = { ...state.movieList, ...payload }
    }
  }
});

export const { addMovie } = moviesSlice.actions

export default moviesSlice.reducer