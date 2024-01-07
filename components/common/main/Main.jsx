import React from 'react'
import { View, ScrollView } from 'react-native'
import { SIZES } from '../../../constants'
import { CharList, Welcome } from '../../../components'

const Main = ({ chars }) => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Welcome />
			<View style={{ flex: 1, padding: SIZES.medium }}>
				<CharList chars={chars} />
			</View>
		</ScrollView>
	)
}

export default Main
