import React from 'react'
import { StyleSheet, Text, SafeAreaView,  View } from 'react-native'
import { colors } from '../constants'
import { Button } from '@rneui/themed';


const GetSendMovie = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.buttonContainer}>
			<Button 
				title='Send a recommendation' 
				type='outline' 
				containerStyle={{
					width: 175,
					marginHorizontal: 10,
					marginVertical: 10,
				}}
				titleStyle={{color: colors.main}}
				buttonStyle={{
					borderRadius: 3,
				}}
				onPress={() => alert('sending recommendation')}
			/>
			<Button 
				title='Ask for recommendation'
				containerStyle={{
					width: 175,
					marginHorizontal: 10,
					marginVertical: 10,
				}}
				buttonStyle={{
					backgroundColor: colors.main,
					borderRadius: 3,
				}}
				onPress={() => alert('asking for recommendation')}
			/>
			</View>
		</SafeAreaView>
	)
}

export default GetSendMovie;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginHorizontal: 20
	},
	button: {
		border: 1,
		borderColor: '#F0f1f1',
		borderRadius: 6,
		padding: 10
	}
})
