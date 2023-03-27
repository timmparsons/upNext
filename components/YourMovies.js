import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { MOVIE_LIST } from '../constants/movieList';

const YourMovies = () => {
	console.log('qqq', MOVIE_LIST)
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 15
			}}
			horizontal
			showHorizontalScrollIndicator={false}
		>
			{MOVIE_LIST.map(movie => (
				<TouchableOpacity style={styles.button} onPress={() => console.log('Press')}>
				<Image 
					key={movie.id}
					style={styles.image}
					source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
				</TouchableOpacity>
			))
			}
		</ScrollView> 
	)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  }, 
  image: {
    height: 200,
    aspectRatio: 1/2,
    marginHorizontal: 15
  }
});

export default YourMovies
