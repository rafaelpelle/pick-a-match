import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import UEFA_Ball from '../../images/UEFA_Ball.png'
import UEFA_Logo from '../../images/UEFA_Logo.png'

const ballStyle = { padding: '2em 5em' }
const logoStyle = { paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em' }

class PageHeader extends React.Component {
	render() {
		return (
			<Container >
				<Image src={UEFA_Ball} centered style={ ballStyle } className='App-logo' />
				<Image src={UEFA_Logo} centered style={ logoStyle } />
			</Container>
		)
	}
}

export default PageHeader