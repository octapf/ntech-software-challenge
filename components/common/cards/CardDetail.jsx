import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './carddetail.style'

const CardDetail = ({ char }) => {
	console.log(char)
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={styles.container}>
				<Image
					style={styles.logoContainer}
					source={{
						uri: char.image,
					}}
					resizeMode='cover'
				/>
				<Text style={styles.characterName}>{char.name}</Text>
				<Text style={styles.info}>{char.status}</Text>
				<Text style={styles.info}>{char.species}</Text>
				<Text style={styles.info}>{char.type}</Text>
				<Text style={styles.info}>{char.location.name}</Text>
			</View>
		</View>
	)
}

export default CardDetail
