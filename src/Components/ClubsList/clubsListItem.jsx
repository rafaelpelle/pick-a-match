import React from 'react'
import {Grid, Header, Image} from 'semantic-ui-react'

class ClubsListItem extends React.Component {
	render() {
		const { name, fullName, image } = this.props.club
		return (
			<Grid >
				<Grid.Column textAlign='left' >
					<Image src={image} inline />
					<Header content={fullName} />
				</Grid.Column>
				<Grid.Column textAlign='right' >

				</Grid.Column>
			</Grid>
		)
	}
}
export default ClubsListItem
