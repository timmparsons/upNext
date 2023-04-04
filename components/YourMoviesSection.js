import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import MovieList from './MovieList';

const YourMoviesSection = () => {
	const [selectedMovies, setSelectedMovies] = useState([]);

	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 15
			}}
			horizontal
			showHorizontalScrollIndicator={false}
		>
		<MovieList
			style={styles.MovieList} 
			selectedMovies={selectedMovies}
			setSelectedMovies={setSelectedMovies}
		/>
		</ScrollView> 
	)
}

const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',
		marginRight: 10
  }, 
	MovieList: {}
});

export default YourMoviesSection;
