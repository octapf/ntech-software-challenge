import { StyleSheet } from 'react-native'

import { COLORS, FONT, SHADOWS, SIZES } from '../../../constants'

const styles = StyleSheet.create({
	container: {
		width: 175,
		height: 190,
		padding: SIZES.xLarge,
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.medium,
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 100,
		height: 75,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoImage: {
		width: '70%',
		height: '70%',
	},
	characterName: {
		fontSize: SIZES.medium,
		fontFamily: FONT.regular,
		textAlign: 'center',
		color: '#B3AEC6',
		marginTop: SIZES.small / 1.5,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
})

export default styles
