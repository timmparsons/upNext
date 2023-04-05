import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const MovieScreen = () => {
	const {
		params: {
		id,
		title,
		overview,
		poster_path,
	}} = useRoute();

	console.log('qqq', id)
	return (
		<View
			style={styles.container}>
			<Text>{title}</Text>
			<Image key={id}
				style={styles.image}
				source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}/>
			<Text>{overview}</Text>
			<MaterialCommunityIcons name="send" size={24} color="black" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		border: 'lightgray'
	},
	image: {
		height: 400,
		aspectRatio: 1/2 
	}
});

export default MovieScreen
 