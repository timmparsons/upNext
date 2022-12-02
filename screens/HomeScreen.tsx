import React from 'react'
import { StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/core';
import { HomeScreenNavigationProp } from '../types/navigation';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Here's my new app</Text>

      {/* Search box */}
      <View style={styles.searchView}>
        <MagnifyingGlassIcon />
        <TextInput
          placeholder='Search for movie'
          keyboardType='default'
        />
      </View>

      <View>
        <Text>Featured Movies</Text>
      </View>

      <View>
        <Text>Featured Movies</Text>
      </View>

      <View>
        <Text>Featured Movies</Text>
      </View>

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Movies')}
      /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchView: {
    backgroundColor: 'lightgray',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  }
});

export default HomeScreen
