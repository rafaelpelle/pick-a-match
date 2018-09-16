import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Checkbox, Divider, Header, Segment } from 'semantic-ui-react'
import { clubs } from '../../Utils/clubs'
import ClubsListItem from './clubsListItem'
import { setEqualClubsValue } from './clubsListActions'

const headerStyle = { marginTop: '0em', marginBottom: '1em' }
const dividerStyle = { marginTop: '3em', marginBottom: '2em' }
const toggleStyle = { marginBottom: '3em' }

class ClubsList extends React.Component {

	handleChange = (e, data) => {
		const { setEqualClubsValue } = this.props
		setEqualClubsValue(data.checked)
	}

	renderClubs = () => {
		return clubs.map((club, i) => {
			return(<ClubsListItem club={ club } key={ i } />)
		})
	}

	render() {
		const { equalClubs } = this.props
		return (
			<Segment basic style={ { padding: '0em 1em' } } >
				<Header as='h2' content='Selecionar Clubes' textAlign='center' style={ headerStyle } inverted />
				{ this.renderClubs() }
				<Divider inverted style={ dividerStyle } />
				<Header as='h2' content='Permitir dois clubes iguais?' textAlign='center' style={ headerStyle } inverted />
				<Checkbox toggle checked={ equalClubs } onChange={ this.handleChange } style={ toggleStyle } />
			</Segment>
		)
	}
}
const mapStateToProps = (state) => ({ equalClubs: state.clubs.equalClubs })
const mapDispatchToProps = (dispatch) => bindActionCreators({ setEqualClubsValue }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClubsList)
