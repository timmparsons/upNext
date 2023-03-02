import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, collection, addDoc, getDocs } from '../../firebase/index';

export const addMovieToDb = createAsyncThunk(
  'movies/addMoviesToDb',
  movie => {
    try {
      const docRef = addDoc(collection(db, "movie"), {
        id: 'tim',
        title: movie,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
)

export const getMoviesFromDb = createAsyncThunk(
  'movies/getMoviesFromoDb',
  async (movie) => {
    const docRef = await getDocs(collection(db, "movie"));
    docRef.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }
    )
  })

const initialState = {
  status: 'idle',
  movieList: [],
  error: {}
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const { payload } = action;
      state.movieList = { ...state.movieList, ...payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addMovieToDb.pending, (state, action) => {
      state.status = 'loding',
        state.movieList = [],
        state.error = {}
    }),
      builder.addCase(addMovieToDb.fulfilled, (state, action) => {
        state.status = 'idle',
          state.movieList = action.payload,
          state.error = {}
      }),
      builder.addCase(addMovieToDb.rejected, (state, action) => {
        state.status = 'idle',
          state.movieList = [],
          state.error = action.payload
      }),
      builder.addCase(getMoviesFromDb.fulfilled, (state, action) => {
        state.status = 'idle',
          state.movieList = action.payload,
          state.error = {}
      })
  }
});

export const { addMovie } = moviesSlice.actions

export default moviesSlice.reducer