import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { collection, getDocs, db } from '../firebase/index'; 


const MyMovieList = () => {
	const [moviesFromDb, setMoviesFromDb] = useState([]);
	
	const getMovies = async(setMoviesFromDb) => {
			const querySnapshot = await getDocs(collection(db, "movie"));
			setMoviesFromDb(
				querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
			)
			console.log(moviesFromDb);
		};

  const Item = ({ title }) => {
    return (
      <View style={styles.item} >
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  useEffect(() => {
    getMovies()
	}, [])
	
  return (
    <SafeAreaView style={styles.container}>
      {moviesFromDb.length > 0 ? (
        <FlatList
          data={moviesFromDb}
          renderItem={({ item }) => <Item title={item.title} style={styles.title} />}
          keyExtractor={item => item.id} />
      ) : (
			<ActivityIndicator />
			)}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default MyMovieList
