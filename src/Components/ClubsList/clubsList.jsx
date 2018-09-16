import React from 'react'
import {Header, Segment} from 'semantic-ui-react'
import { clubs } from '../../Utils/clubs'
import ClubsListItem from './clubsListItem'

const headerStyle = { marginTop: '0em', marginBottom: '1em' }

class ClubsList extends React.Component {
	renderClubs = () => {
		return clubs.map((club, i) => {
			return(<ClubsListItem club={ club } key={ i } />)
		})
	}

	render() {
		return (
			<Segment basic style={ { padding: '0em 1em' } } >
				<Header as='h2' content='Selecionar Clubes' textAlign='center' style={ headerStyle } inverted />
				{ this.renderClubs() }
			</Segment>
		)
	}
}
export default ClubsList
