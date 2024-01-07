import React from 'react'
import { Stack } from 'expo-router'
import { Image } from 'react-native'
import { COLORS, icons, logos } from '../../../constants'
import ScreenHeaderBtn from './ScreenHeaderBtn'

const Header = () => {
	const handlePress = () => {
		alert(`Ntech Software Challenge by Octavio Frangipani

Enjoy the ride! ♥️`)
	}
	return (
		<Stack.Screen
			options={{
				headerStyle: { backgroundColor: COLORS.lightWhite },
				headerShadowVisible: false,
				headerLeft: () => (
					<ScreenHeaderBtn
						iconUrl={icons.menu}
						dimension='60%'
						handlePress={handlePress}
					/>
				),
				headerRight: () => (
					<Image
						source={logos.mainLogo}
						resizeMode='cover'
						style={{ width: 120, height: 40 }}
					/>
				),
				headerTitle: '',
			}}
		/>
	)
}

export default Header
