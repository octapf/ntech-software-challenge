import { useState } from 'react'
import { SafeAreaView, Text, ActivityIndicator } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { COLORS } from '../constants'
import { Footer, Header, Main } from '../components'
import useFetch from '../hook/useFetch'

const Home = () => {
	const router = useRouter()

	const [page, setPage] = useState(1)

	const { data, infoData, isLoading, error, refetch } = useFetch({
		endpoint: 'character/',
		query: page,
	})

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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
