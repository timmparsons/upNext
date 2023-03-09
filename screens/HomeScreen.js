import React, { useLayoutEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { UserIcon } from 'react-native-heroicons/outline';
import SearchBar from '../components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';
import GetSendMovie from '../components/GetSendMovie';
import { colors } from '../constants';

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
						<Text style={styles.profileText}>My Profile</Text>
						<Text style={styles.locationText}>Current Location</Text>
					</View>
						<UserIcon size={35} color={colors.main} />
			</View>
			<View>
				<SearchBar />
			</View>
			<ScrollView>
				<GetSendMovie />
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
