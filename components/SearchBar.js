import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { addMovieToDb, } from '../redux/slices/moviesSlice';

const SearchBar = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

  // When data inputed in input box, redux gets updated. At the same time we need a listener to push the data to DB
  // Look into removing state hook and just using redux

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search movie"
        style={styles.input}
        value={movie}
        onChangeText={(text) => setMovie(text)}
        onSubmitEditing={() => {
          dispatch(addMovieToDb(movie))
          setMovie('')
        }
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 400,
    margin: 12,
    padding: 10,
    backgroundColor: '#FAF9F6',
    borderWidth: '0.2px #F5F5F5',
    borderRadius: 8
  }
})

export default SearchBar;
