import { useState, useEffect } from 'react'
import { SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS } from '../constants'
import { Footer, Header, Main } from '../components'
import useFetch from '../hook/useFetch'

const Home = () => {
	const [page, setPage] = useState(1)

	const { data, infoData, isLoading, error, refetch } = useFetch({
		endpoint: 'character/',
		query: page,
	})

	const router = useRouter()

	useEffect(() => {}, [])

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Header />
			{isLoading ?? (
				<ActivityIndicator
					size={'large'}
					colors={COLORS.primary}
				/>
			)}
			{error ?? <Text>{error}</Text>}
			{data.results ?? <Main chars={data} />}
			<Footer />
		</SafeAreaView>
	)
}

export default Home
