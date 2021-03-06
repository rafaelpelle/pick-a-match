const INITIAL_STATE = {
	realMadrid: true,
	barcelona: true,
	juventus: true,
	roma: false,
	psg: true,
	chelsea: true,
	arsenal: false,
	liverpool: false,
	mUnited: true,
	mCity: true,
	bayern: false,
	borussia: true,
	equalClubs: true,
	player1Club: null,
	player2Club: null,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CLUB_ENABLED':
			return { ...state, [action.payload]: true }
		case 'CLUB_DISABLED':
			return { ...state, [action.payload]: false }
		case 'SET_EQUAL_VALUE':
			return { ...state, equalClubs: action.payload }
		case 'SET_PLAYER1':
			return { ...state, player1Club: action.payload }
		case 'SET_PLAYER2':
			return { ...state, player2Club: action.payload }
		default:
			return state
	}
}