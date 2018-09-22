import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'semantic-ui-react'
import { clubs } from '../../Utils/clubs'
import { setPlayer1Club, setPlayer2Club } from '../ClubsList/clubsListActions'

const buttonStyle = {
	borderRadius: '100px',
	marginTop: '1em',
}

class PickMatchButton extends Component {
	filterClubs = () => {
		const { toggleList } = this.props
		return clubs.filter(club => {
			if (toggleList[club.name]) {
				return club
			} else {
				return undefined
			}
		})
	}

	removeClubFromList = (selectedClubs, club) => {
		for (let i = 0; i < selectedClubs.length; i++) {
			if (selectedClubs[i].name === club.name) {
				selectedClubs.splice(i,1);
			}
		}
		return selectedClubs
	}

	getRandomNumber = (max) => {
		const random = Math.floor(Math.random() * max)
		return random
	}

	handleClick = () => {
		let selectedClubs = this.filterClubs()
		const player1Club = selectedClubs[this.getRandomNumber(selectedClubs.length)]
		const { equalClubsAllowed, setPlayer1Club, setPlayer2Club } = this.props
		if (!equalClubsAllowed) {
			selectedClubs = this.removeClubFromList(selectedClubs, player1Club)
		}
		const player2Club = selectedClubs[this.getRandomNumber(selectedClubs.length)]
		setPlayer1Club(player1Club)
		setPlayer2Club(player2Club)
	}

	render() {
		return(
			<Button
				content='Pick-A-Match!'
				size='huge'
				inverted
				style={ buttonStyle }
				onClick={ this.handleClick }
			/>
		)
	}
}
const mapStateToProps = (state) => ({ toggleList: state.clubs, equalClubsAllowed: state.clubs.equalClubs })
const mapDispatchToProps = (dispatch) => bindActionCreators({ setPlayer1Club, setPlayer2Club }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PickMatchButton)