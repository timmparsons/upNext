import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { addMovieToDb, } from '../redux/slices/moviesSlice';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const SearchBar = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

  // When data inputed in input box, redux gets updated. At the same time we need a listener to push the data to DB
  // Look into removing state hook and just using redux

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
          dispatch(addMovieToDb(movie))
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
		backgroundColor: 'lightgray',
		marginLeft: 10,
		marginRight: 10,
		padding: 10
	},
	searchIcon: {
		color: 'gray'
	}
})

export default SearchBar;
