import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { white, transparent } from '../../Utils/colors'
import { history } from '../../Utils/history'

const buttonStyle = {
	borderRadius: '100px',
	marginTop: '1em',
	padding: '0.9em 0.9em 0.9em 0.8em',
	color: white,
	backgroundColor: transparent,
}

class ReturnButton extends React.Component {
	handleClick = () => {
		history.goBack()
	}

	render() {
		return(
			<Container textAlign='left'>
				<Button
					icon='chevron left'
					style={ buttonStyle }
					onClick={ this.handleClick }
				/>
			</Container>
		)
	}
}
export default ReturnButton
