import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import MyMovieList from './components/MyMovieList';
import { store } from './redux/store';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <SearchBar />
        <MyMovieList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});
