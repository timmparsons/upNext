import React from 'react';

const MovieItem = ({ title }) => {
	return (
		<View style={styles.item} >
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default MovieItem;