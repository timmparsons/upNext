import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { db, collection, getDocs } from '../firebase/index';
import { FlatList } from 'react-native-gesture-handler';

const MyMovieList = () => {
  const [movieList, setMovieList] = useState([])

  const getMovieList = async () => {
    const querySnapshot = await getDocs(collection(db, "movie"));
    setMovieList(querySnapshot.docs.map((doc => ({ ...doc.data(), id: doc.id }))))

    console.log(movieList)
  }

  const Item = ({ title }) => {
    return (
      <View style={styles.item} >
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  useEffect(() => {
    getMovieList()
  }, [])

  console.log('xxx', movieList.length)
  return (
    <SafeAreaView style={styles.container}>
      {movieList.length > 0 ? (
        <FlatList
          data={movieList}
          renderItem={({ item }) => <Item title={item.title} style={styles.title} />}
          keyExtractor={item => item.id} />
      ) : (<ActivityIndicator />)
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default MyMovieList
