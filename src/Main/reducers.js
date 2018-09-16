import { combineReducers } from 'redux'
import clubsReducer from '../Components/ClubsList/clubsReducer'

const rootReducer = combineReducers ({
	clubs: clubsReducer,
})

export default rootReducer