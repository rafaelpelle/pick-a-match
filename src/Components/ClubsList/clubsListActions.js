export const enableClub = (clubName) => ({
	type: 'CLUB_ENABLED',
	payload: clubName,
})

export const disableClub = (clubName) => ({
	type: 'CLUB_DISABLED',
	payload: clubName,
})