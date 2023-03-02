import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { getMoviesFromDb } from '../redux/slices/moviesSlice';


// This should grab information frmo database in load
const MyMovieList = () => {

  const Item = ({ title }) => {
    return (
      <View style={styles.item} >
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  useEffect(() => {
    getMoviesFromDb
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* {movieList.length > 0 ? (
        <FlatList
          data={movieList}
          renderItem={({ item }) => <Item title={item.title} style={styles.title} />}
          keyExtractor={item => item.id} />
      ) : (<ActivityIndicator />)
      } */}
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
