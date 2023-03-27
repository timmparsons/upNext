import React, { useLayoutEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { UserIcon } from 'react-native-heroicons/outline';
import SearchBar from '../components/SearchBar';
import { colors } from '../constants';
import SearchedMovies from '../components/SearchedMovies';
import YourMovies from '../components/YourMovies';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, []);

	return (
		<SafeAreaView style={styles.headerBG}>
			<View style={styles.container}>
				<Image source={{ 
						uri: 'https://links.papareact.com/wru'
					}}
					style={styles.imageIcon}
					/>
					<View style={styles.profileImageSection}>
						<Text style={styles.locationText}>Hi Tim</Text>
					</View>
						<UserIcon size={35} color={colors.main} />
			</View>
			<View>
				<SearchBar />
			</View>
			<ScrollView>
				<YourMovies />
			</ScrollView>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	headerBG: {
		backgroundColor: 'white',
		borderBottomColor: 'lightGray'
	},
	container: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
	},
	heading: {
		color: 'red'
	},
	imageIcon: {
		height: 30,
		width: 30,
		backgroundColor: 'lightgray',
		borderRadius: '10'
	},
	profileImageSection: {
		flex: 1,
		paddingLeft: 5
	},
	profileText: {
		fontWeight: 'bold',
		color: 'gray',
		fontSize: 12
	},
	locationText: {
		fontWeight: 'bolder',
		fontSize: 16
	}
});

export default HomeScreen
