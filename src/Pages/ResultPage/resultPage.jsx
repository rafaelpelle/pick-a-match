import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { Segment } from 'semantic-ui-react'
import { history } from '../../Utils/history'
import ResultClub from '../../Components/ResultClub/resultClub'

const noPadding = { padding: '0em' }
const pageStyle = {...noPadding, height: '100vh'}

class ResultPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { visible: false }
	}

	componentDidMount() {
		this.makeItVisible()
	}

	makeItVisible = () => this.setState({ visible: true })

	render() {
		const { visible } = this.state
		const { player1Club, player2Club } = this.props
		if (player1Club && player2Club) {
			return (
				<Segment basic textAlign='center' verticalAlign='middle' style={ pageStyle }>
					<ResultClub club={ player1Club } player='Player 1' visible={ visible } animation='fly right' />
					<ResultClub club={ player2Club } player='Player 2' visible={ visible } animation='fly left' />
				</Segment>
			)
		} else {
			return(
				<div>
					{ history.push('/') }
				</div>
			)
		}
	}
}
const mapStateToProps = (state) => ({ player1Club: state.clubs.player1Club, player2Club: state.clubs.player2Club })
const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)
