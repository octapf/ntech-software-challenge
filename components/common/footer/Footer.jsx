import React from 'react'
import { Text } from 'react-native'
import { FONT, COLORS } from '../../../constants'

const Footer = () => {
	return (
		<Text
			style={{
				fontSize: 10,
				margin: 15,
				fontFamily: FONT.medium,
				color: COLORS.gray,
				textAlign: 'center',
			}}
		>
			Ntech-Software Challenge by Octavio Frangipani
		</Text>
	)
}

export default Footer
