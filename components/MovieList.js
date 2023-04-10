import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { MOVIE_LIST } from '../constants/movieList';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MovieList = ({
	selectedMovies, 
	setSelectedMovies, 
	setShareWithFriend,
	shareWithFriend }) => {
	const navigation = useNavigation();

	const selectMovie = (movie) => {
		const { 
			id, 
			title,
			overview,
			poster_path, } = movie;

		// if(selectedMovies.includes(id)) return
		setSelectedMovies([...selectedMovies, id])
		navigation.navigate('Movie', { 
			id, 
			title,
			overview,
			poster_path, })
	}

	const getSelectedMovie = (movie) => {
		return selectedMovies.includes(movie.id);
	}

	const sendToFriend = () => {
		setShareWithFriend(!shareWithFriend)
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
				<Image 
					key={movie.id}
					style={styles.image}
					source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
				<Text>{movie.original_title}</Text>
				<MaterialCommunityIcons 
					name="send" 
					size={24} 
					color="black"
					onPress={sendToFriend} />
			</TouchableOpacity>
			<View>
				{ shareWithFriend && <FriendList /> }
			</View>
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
