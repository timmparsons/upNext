import { StyleSheet, Text, View } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
		<NavigationContainer>
			<Provider store={store}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Movie" component={MovieScreen} />
			</Stack.Navigator>

				{/* <View>
					<SearchBar />
					<MyMovieList />
				</View> */}
			</Provider>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({});
