import React from 'react'
import { Header, Image, Segment, Transition } from 'semantic-ui-react'

const transitionStyle = { marginTop: '0em', marginBottom: '2em' }
const playerNameStyle = { marginBottom: '0em' }
const imageStyle = { padding: '1em' }
const clubNameStyle = { marginTop: '0em' }

export const ResultClub = (props) => {
	const { club, player, visible, animation } = props
	return (
		<Transition visible={ visible } animation={ animation } duration={ 1000 } style={ transitionStyle } >
			<Segment basic>
				<Header as='h2' content={ player } inverted style={ playerNameStyle } />
				<Image src={ club.image } inline size='small' style={ imageStyle } />
				<Header content={ club.fullName } inverted style={ clubNameStyle } />
			</Segment>
		</Transition>
	)
}
export default ResultClub
