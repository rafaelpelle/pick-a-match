import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { Header, Image, Segment, Transition } from 'semantic-ui-react'
import { history } from '../../Utils/history'

const padding2 = { padding: '2em' }

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
				<Segment basic textAlign='center'>
					<Transition visible={ visible } animation='fly right' duration={ 1000 } >
						<Segment basic style={ padding2 }>
							<Header content='Player 1' inverted/>
							<Image src={ player1Club.image } inline size='small' />
							<Header content={ player1Club.fullName } inverted/>
						</Segment>
					</Transition>
					<Transition visible={ visible } animation='fly left' duration={ 1000 } >
						<Segment basic style={ padding2 }>
							<Header content='Player 2' inverted/>
							<Image src={ player2Club.image } inline size='small' />
							<Header content={ player2Club.fullName } inverted/>
						</Segment>
					</Transition>
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
