import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import MovieList from './MovieList';

const YourMoviesSection = () => {
	const [selectedMovies, setSelectedMovies] = useState([]);
	const [shareWithFriend, setShareWithFriend] = useState(false);

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
			shareWithFriend={shareWithFriend}
			setShareWithFriend={setShareWithFriend}
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
