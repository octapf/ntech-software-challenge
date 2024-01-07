import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './card.style'

const Card = ({ char }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logoContainer}
				source={{
					uri: char.image,
				}}
				resizeMode='cover'
			/>
			<Text style={styles.characterName}>{char.name}</Text>
		</View>
	)
}

export default Card
