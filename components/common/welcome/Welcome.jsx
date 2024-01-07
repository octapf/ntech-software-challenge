import React from 'react'
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { SIZES, icons } from '../../../constants'
import styles from './welcome.style.js'

const Welcome = () => {
	return (
		<View style={{ margin: SIZES.medium }}>
			<View style={styles.container}>
				<Text style={styles.userName}>Hi there!</Text>
				<Text style={styles.welcomeMessage}>Find your favorite character</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={{}}
						value=''
						onChange={() => {}}
						placeholder='Explore the universe..'
					/>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={() => {}}
				>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Welcome
