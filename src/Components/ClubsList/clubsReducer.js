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
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'enableClub':
			return { ...state, [action.payload]: true }
		case 'disableClub':
			return { ...state, [action.payload]: false }
		default:
			return state
	}
}