export const enableClub = (clubName) => ({
	type: 'CLUB_ENABLED',
	payload: clubName,
})

export const disableClub = (clubName) => ({
	type: 'CLUB_DISABLED',
	payload: clubName,
})

export const setEqualClubsValue = (value) => ({
	type: 'SET_EQUAL_VALUE',
	payload: value,
})