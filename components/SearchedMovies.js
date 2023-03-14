import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useGetMovieByNameQuery } from '../redux/slices/tmdbApi';

const SearchedMovies = () => {
	const { data, error, isLoading } = useGetMovieByNameQuery('the avengers')

	return (
		<View style={styles.container}>
			{isLoading ? 
				<Text>Loading...</Text> : 
				data?.results?.map(movie => 
					{ movie.poster_path && <Image 
						key={movie.id}
						source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} /> 
					}
				)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
	}
});

export default SearchedMovies
