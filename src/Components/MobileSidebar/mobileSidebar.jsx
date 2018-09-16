import React, { Component } from 'react'
import { Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'


class MobileSibebar extends Component {
	state = {}

	handlePusherClick = () => {
		const { sidebarOpened } = this.state
		if (sidebarOpened) this.setState({ sidebarOpened: false })
	}

	handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state
		return (
			<Responsive >
				<Sidebar.Pushable>
					<Sidebar as={Menu} animation='push' vertical visible={sidebarOpened} style={{paddingTop: '2em', backgroundColor: 'transparent'}}>
					</Sidebar>

					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handlePusherClick}
						style={{ minHeight: '100vh' }}
					>
						<Segment
							inverted
							textAlign='center'
							style={{ padding: '1em 0em', backgroundColor: 'transparent' }}
							vertical
						>
							<Container>
								<Menu inverted pointing secondary size='large' >
									<Menu.Item onClick={this.handleToggle}>
										<Icon name='sidebar' />
									</Menu.Item>
								</Menu>
							</Container>
						</Segment>
						{children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		)
	}
}
export default MobileSibebar