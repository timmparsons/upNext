import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { MOVIE_LIST } from '../constants/movieList';

const YourMovies = () => {
	const [selectedMovies, setSelectedMovies] = useState([]);

	const selectMovie = (movie) => {
		if(selectedMovies.includes(movie.id)) return
		const uniqueIds = new Set(selectedMovies)
		setSelectedMovies([uniqueIds, movie.id])
	}

	console.log(selectedMovies)
	const getSelectedMovie = (movie) => {
		return selectedMovies.includes(movie.id);
	}

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
				<TouchableOpacity 
					style={styles.button}
					onPress={() => selectMovie(movie)}>
					<View style={styles.imageBorder}>
					<Image 
						key={movie.id}
						style={styles.image}
						source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
					</View>
				</TouchableOpacity>
			))
			}
		</ScrollView> 
	)
}

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
		marginRight: 10
  }, 
  image: {
    height: 200,
    aspectRatio: 1/2,
	}, 
	overlay: {
		position: 'absolute',
		width: '75%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		top: 0,
		left: 0
	},
	imageBorder: {
		borderWidth: 1,
		borderColor: 'lightgray'
	}
});

export default YourMovies
