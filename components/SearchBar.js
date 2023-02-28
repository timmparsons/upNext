import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { db, collection, addDoc } from '../firebase/index';
import { useDispatch } from 'react-redux'
import { addMovie } from '../redux/slices/moviesSlice';

const SearchBar = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();
  // const addToFirebase = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "movie"), {
  //       id: 'tim',
  //       title: movie,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     setMovie('');
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }


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
          dispatch(addMovie({ name: movie }))
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
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default SearchBar;
