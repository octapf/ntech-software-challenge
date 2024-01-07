import React, { useState } from 'react'
import {
	Text,
	View,
	Image,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { ScreenHeaderBtn, CardDetail, Footer } from '../../components'
import { SIZES, COLORS, icons, logos } from '../../constants'
import useFetch from '../../hook/useFetch'

const CardDetails = () => {
	const params = useLocalSearchParams()
	const router = useRouter()

	const [refreshing, setRefreshing] = useState(false)

	const { data, infoData, isLoading, error, refetch } = useFetch({
		endpoint: `character/${params.id}`,
	})

	const onRefresh = () => {}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => {
						return (
							<ScreenHeaderBtn
								iconUrl={icons.left}
								dimension='60%'
								handlePress={() => router.back()}
							/>
						)
					},
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

			{isLoading ?? (
				<ActivityIndicator
					size={'large'}
					colors={COLORS.primary}
				/>
			)}
			{error ?? <Text>{error}</Text>}
			{data.name && <CardDetail char={data} />}
			<Footer />
		</SafeAreaView>
	)
}

export default CardDetails
