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

export const setPlayer1Club = (player1Club) => ({
	type: 'SET_PLAYER1',
	payload: player1Club,
})

export const setPlayer2Club = (player2Club) => ({
	type: 'SET_PLAYER2',
	payload: player2Club,
})