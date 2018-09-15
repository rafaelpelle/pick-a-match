import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

const buttonStyle = {
	borderRadius: '100px',
	marginTop: '1em',
}

class PickMatchButton extends Component {
	render() {
		return(
			<Button
				content='Pick-A-Match!'
				size='huge'
				inverted
				style={ buttonStyle } />
		)
	}
}
export default PickMatchButton