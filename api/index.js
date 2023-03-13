import { TMDB_BASE_URL, TMDB_API_KEY } from '@env'

const requests = {
	popularMovies: `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
	// getmovie: (movie) => `${TMDB_BASE_URL}/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
}

export default requests;