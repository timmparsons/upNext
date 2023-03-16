import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useGetMovieByNameQuery } from '../redux/slices/tmdbApi';
import SearchedMovies from '../components/SearchedMovies';

const SearchBar = () => {
	const [movie, setMovie] = useState('');

  return (
    <View style={styles.searchSection}>
			<MagnifyingGlassIcon style={styles.searchIcon}/>
      <TextInput
        placeholder='Pick a movie'
				keyboardType='default'
        style={styles.input}
        value={movie}
        onChangeText={(text) => setMovie(text)}
        onSubmitEditing={() => {
					useGetMovieByNameQuery(movie)
          setMovie('')
        }
        }
      />
			<SearchedMovies />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
		flexDirection: 'row',
		backgroundColor: '#F0f1f1',
		borderRadius: 12,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		padding: 10
	},
	searchIcon: {
		color: 'gray'
	}
})

export default SearchBar;
