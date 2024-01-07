import { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { fetchCharacters } from '../utils/fetcher'
import { COLORS } from '../constants'
import { Footer, Header, Main } from '../components'

const Home = () => {
	const [chars, setChars] = useState([])
	const [error, setError] = useState('')

	const router = useRouter()

	useEffect(() => {
		async function fetchChars() {
			const data = await fetchCharacters()

			setChars(data.results)
		}
		try {
			fetchChars()
		} catch (error) {
			setError(error)
		}
	}, [])

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Header />
			{error ? <Text>{error}</Text> : <Main chars={chars} />}
			<Footer />
		</SafeAreaView>
	)
}

export default Home
