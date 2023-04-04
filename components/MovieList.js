import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { MOVIE_LIST } from '../constants/movieList';
import { useNavigation } from '@react-navigation/native';

const MovieList = ({ selectedMovies, setSelectedMovies }) => {
	const navigation = useNavigation();

	const selectMovie = (movie) => {
		const { id } = movie;

		if(selectedMovies.includes(id)) return
		setSelectedMovies([...selectedMovies, id])
		navigation.navigate('Movie', { id })
	}

	const getSelectedMovie = (movie) => {
		return selectedMovies.includes(movie.id);
	}

	return (
		<ScrollView
			horizontal
			style={styles.movieListContainer}>
		{MOVIE_LIST.map(movie => (
			<View style={styles.movieInfoContainer}>
			<TouchableOpacity 
				style={styles.button}
				onPress={() => selectMovie(movie)}>
				{ getSelectedMovie && <View style={styles.imageBorder}>
				<Image 
					key={movie.id}
					style={styles.image}
					source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
				<Text>{movie.original_title}</Text>
				</View>
				}
			</TouchableOpacity>
			</View>
			))
		}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	movieListContainer: {},
	movieInfoContainer: {
		margin: 10,
	} ,
  image: {
    height: 200,
		aspectRatio: 1/2
	}, 
	overlay: {
		position: 'absolute',
		width: '75%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		top: 0,
		left: 0
	},
	imageBorder: {}
});

export default MovieList;
