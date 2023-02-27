import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { add, db, getFirestore, collection, addDoc } from '../firebase/index';
import { MOVIES_LIST } from '../constants/movieList';

const SearchBar = () => {
  const [movie, setMovie] = useState('');
  // const movieTitle = MOVIES_LIST.map((movie) => movie.title)

  const addToFirebase = async () => {
    try {
      const docRef = await addDoc(collection(db, "movie"), {
        id: 'tim',
        title: movie,
      });
      console.log("Document written with ID: ", docRef.id);
      setMovie('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  console.log('qqq', movie)
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search movie"
        style={styles.input}
        value={movie}
        onChangeText={(text) => setMovie(text)}
        onSubmitEditing={addToFirebase}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default SearchBar;
