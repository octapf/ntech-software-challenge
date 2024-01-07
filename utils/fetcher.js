const BASE_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'

export const fetchCharacters = async () => {
	const response = await fetch(`${BASE_CHARACTERS_URL}`)

	const data = await response.json()

	return data
}
