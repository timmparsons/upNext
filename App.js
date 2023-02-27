import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import MyMovieList from './components/MyMovieList';


export default function App() {
  return (
    <View>
      <SearchBar />
      <MyMovieList />
    </View>
  );
}

const styles = StyleSheet.create({});
