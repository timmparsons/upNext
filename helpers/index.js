export const editWordForMovie = (movie) => {
	return movie.trim().split(' ').join('%20')
}