import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from 'react-native'
import { db, collection, getDocs } from '../firebase/index';
import { FlatList } from 'react-native-gesture-handler';

const MyMovieList = () => {
  const [movieList, setMovieList] = useState([])

  const getMovieList = async () => {
    const querySnapshot = await getDocs(collection(db, "movie"));
    querySnapshot.forEach((doc) => {
      console.log('qqq', doc.id, doc.data())
      const { title, id } = doc.data()
      setMovieList({
        ...doc.data(),
        id: doc.id
      })
    });
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

  console.log('xxx', movieList)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tim</Text>
      {movieList > 1 ? (
        <FlatList
          data={movieList}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item.id} />
      ) : null
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyMovieList
