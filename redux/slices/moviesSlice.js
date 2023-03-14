import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, collection, addDoc } from '../../firebase/index';
import { getMovies } from '../../components/MyMovieList';
import requests from '../../api';

export const addMovieToDb = createAsyncThunk(
  'movies/addMoviesToDb',
  async movie => {
    try {
      const docRef = await addDoc(collection(db, 'movie'), {
        id: 'tim',
        title: movie,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
		// getMovies()
	}
)

const initialState = {
	movieList: [],
	searchedMovies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { payload } = action;
      state.movieList = { ...state.movieList, ...payload }
		},
		searchedMovie: (state, action) => {
			const { payload } = action;
			state.searchedMovies = { ...state.state, ...payload};
		}
  },
  extraReducers: (builder) => {
    builder.addCase(addMovieToDb.pending, (state, action) => {
      state.movieList = []
    }),
		builder.addCase(addMovieToDb.fulfilled, (state, action) => {
			state.movieList = action.payload
		}),
		builder.addCase(addMovieToDb.rejected, (state, action) => {
			state.movieList = []
		})
  }
});

export const { addMovie, searchedMovie } = moviesSlice.actions

export default moviesSlice.reducer