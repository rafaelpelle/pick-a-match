import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Checkbox, Grid, Header, Image } from 'semantic-ui-react'
import { enableClub, disableClub } from './clubsListActions'

const headerStyle = { marginTop: '0.5em' }

class ClubsListItem extends React.Component {

	handleChange = (e, data) => {
		const { enableClub, disableClub, club } = this.props
		const { name } = club
		if (data.checked) {
			enableClub(name)
		} else {
			disableClub(name)
		}
	}

	render() {
		const { club, toggleList } = this.props
		const { name, fullName, image } = club
		const isEnabled = toggleList[name]
		return (
			<Grid verticalAlign='middle' >
				<Grid.Column width={ 10 } textAlign='center' >
					<Image src={image} inline size='mini' />
					<Header content={fullName} inverted size='tiny' style={ headerStyle } />
				</Grid.Column>
				<Grid.Column width={ 6 } textAlign='right' >
					<Checkbox toggle checked={ isEnabled } onChange={ this.handleChange } />
				</Grid.Column>
			</Grid>
		)
	}
}
const mapStateToProps = (state) => ({ toggleList: state.clubs })
const mapDispatchToProps = (dispatch) => bindActionCreators({ enableClub, disableClub }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClubsListItem)
