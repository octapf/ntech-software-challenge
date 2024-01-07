import React from 'react'
import { Text, Image, SafeAreaView, ActivityIndicator } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { ScreenHeaderBtn, CardDetail, Footer } from '../../components'
import { COLORS, icons, logos } from '../../constants'
import useFetch from '../../hook/useFetch'

const CardDetails = () => {
	const params = useLocalSearchParams()
	const router = useRouter()

	const { data, isLoading, error } = useFetch({
		endpoint: `character/${params.id}`,
	})

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
