// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../constants';
import { editWordForMovie } from '../../helpers/index';

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.TMDB_BASE_URL }),
  endpoints: (builder) => ({
    getMovieByName: builder.query({
      query: (name) => `/search/movie?api_key=${API.TMDB_API_KEY}&language=en-US&query=${editWordForMovie(name)}&include_adult=false`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByNameQuery } = tmdbApi

// export const selectMoviesResult = tmdbApi.endpoints.getMovieByName.select()
