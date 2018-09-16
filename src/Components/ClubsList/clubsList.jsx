import React from 'react'
import { Segment } from 'semantic-ui-react'
import { clubs } from '../../Utils/clubs'
import ClubsListItem from './clubsListItem'

class ClubsList extends React.Component {
	constructor(props) {
		super(props)
	}

	renderClubs = () => {
		const clubsList = clubs
		return clubsList.map((club, i) => {
			return(<ClubsListItem club={ club } key={ i } />)
		})
	}

	render() {
		return (
			<Segment basic >
				{ this.renderClubs() }
			</Segment>
		)
	}
}
export default ClubsList
