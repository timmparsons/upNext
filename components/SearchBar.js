import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { addMovieToDb, searchedMovie } from '../redux/slices/moviesSlice';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { TMDB_BASE_URL, TMDB_API_KEY } from '@env';
import requests from '../api';
import { editWordForMovie } from '../helpers';

const SearchBar = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

	const getMovieApi = async (movie) => {
		console.log('qqq', editWordForMovie(movie))
		const formattedMovie = editWordForMovie(movie)
		await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${editWordForMovie(movie)}&include_adult=false`)
		.then((response) => response.json())
		.then((data) =>  dispatch(searchedMovie(data)))
	}

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
					getMovieApi(movie)
          // dispatch(addMovieToDb(movie))
          setMovie('')
        }
        }
      />
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
