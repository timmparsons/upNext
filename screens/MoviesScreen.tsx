import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

const MoviesSScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here's my movieScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MoviesSScreen
