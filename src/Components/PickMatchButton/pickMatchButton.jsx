import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'semantic-ui-react'
import { history } from '../../Utils/history'
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
		return Math.floor(Math.random() * max)
	}

	handleClick = () => {
		const { equalClubsAllowed, setPlayer1Club, setPlayer2Club } = this.props
		let selectedClubs = this.filterClubs()
		const player1RandomNumber = this.getRandomNumber(selectedClubs.length)
		const player1Club = selectedClubs[player1RandomNumber]
		if (!equalClubsAllowed) {
			selectedClubs = this.removeClubFromList(selectedClubs, player1Club)
		}
		const player2RandomNumber = this.getRandomNumber(selectedClubs.length)
		const player2Club = selectedClubs[player2RandomNumber]
		setPlayer1Club(player1Club)
		setPlayer2Club(player2Club)
		history.push('/result')
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