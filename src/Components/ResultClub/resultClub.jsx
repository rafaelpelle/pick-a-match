import React from 'react'
import { Header, Image, Segment, Transition } from 'semantic-ui-react'

const imageStyle = { padding: '1em' }

export const ResultClub = (props) => {
	const { club, player, visible, animation } = props
	return (
		<Transition visible={ visible } animation={ animation } duration={ 1000 }>
			<Segment basic>
				<Header as='h2' content={ player } inverted/>
				<Image src={ club.image } inline size='small' style={ imageStyle } />
				<Header content={ club.fullName } inverted/>
			</Segment>
		</Transition>
	)
}
export default ResultClub
