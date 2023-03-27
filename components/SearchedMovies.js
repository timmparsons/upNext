import React from 'react'
import { Image, StyleSheet, ScrollView, Text } from 'react-native'
import { useGetMovieByNameQuery } from '../redux/slices/tmdbApi';


const SearchedMovies = ({ results }) => {
	const { data, error } = useGetMovieByNameQuery()

	return (
		<Text>Sesrched Movies section</Text>
	)
	// {data ? 
	// 	<ScrollView
	// 		contentContainerStyle={{
	// 			paddingHorizontal: 15,
	// 			paddingTop: 15
	// 		}}
	// 		horizontal
	// 		showHorizontalScrollIndicator={false}>
	// 		{selectMoviesResult?.results?.map(movie => (
	// 			<Image 
	// 				key={movie.id}
	// 				style={styles.image}
	// 				source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
	// 		))
	// 		}
	// 	</ScrollView> : 
	// 	<Text>Nothing too view</Text>
	// 	}
}

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
    padding: 10,
  }, 
  image: {
    height: 75,
    width: 75,
    marginHorizontal: 15
  }
});


export default SearchedMovies