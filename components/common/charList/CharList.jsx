import { View, TouchableOpacity } from 'react-native'
import { Card } from '../../../components'
import { useRouter } from 'expo-router'
import styles from './charlist.style'

const CharList = ({ chars }) => {
	const router = useRouter()

	return (
		<View style={styles.container}>
			{chars?.map((char) => {
				return (
					<TouchableOpacity
						style={{ marginVertical: 5 }}
						key={char.id}
						onPress={() => {
							router.push(`character/${char.id}`)
						}}
					>
						<Card char={char} />
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default CharList
