import { StyleSheet } from 'react-native'

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
	container: {
		width: 350,
		padding: SIZES.xLarge,
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.medium,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 300,
		height: 300,
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
		fontSize: SIZES.large,
		fontFamily: FONT.regular,
		textAlign: 'center',
		color: '#B3AEC6',
		marginTop: SIZES.small / 1.5,
	},
	info: {
		fontSize: SIZES.small,
		fontFamily: FONT.regular,
		textAlign: 'center',
		color: '#B3AEC6',
		marginTop: SIZES.small / 1.5,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	jobName: (selectedJob, item) => ({
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	infoWrapper: {
		flexDirection: 'row',
		marginTop: 5,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	publisher: (selectedJob) => ({
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.bold,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	location: {
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.regular,
		color: '#B3AEC6',
	},
})

export default styles
