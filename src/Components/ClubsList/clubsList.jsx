import React from 'react'
import {Header, Segment} from 'semantic-ui-react'
import { clubs } from '../../Utils/clubs'
import ClubsListItem from './clubsListItem'

const headerStyle = { marginTop: '0em', marginBottom: '1em' }

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
			<Segment basic style={ { padding: '0em 1em' } } >
				<Header as='h3' content='Selecionar clubes' textAlign='center' style={ headerStyle } inverted />
				{ this.renderClubs() }
			</Segment>
		)
	}
}
export default ClubsList
