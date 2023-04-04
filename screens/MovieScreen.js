import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

const MovieScreen = () => {
	const {
		params: {
		id
	}} = useRoute();

	console.log('qqq', id)
	return (
		<View>
			<Text>Movie Screen</Text>
		</View>
	)
}

export default MovieScreen
