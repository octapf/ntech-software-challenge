import { useState, useEffect } from 'react'

const useFetch = ({ endpoint, query }) => {
	const [data, setData] = useState([])
	const [infoData, setInfoData] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		params: { ...query },
	}

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/${endpoint}`,
				options
			)

			const data = await response.json()

			if (data.results) {
				setData(data.results)
				setInfoData(data.info)
			} else {
				console.log('HEREEEEEEEEEEEEEEE', data)
				console.log(data)
				setData(data)
			}
		} catch (error) {
			setError(error.message)
			alert('An error has occured')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, infoData, isLoading, error, refetch }
}

export default useFetch
