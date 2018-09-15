import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PageHeader from './Components/PageHeader/pageHeader'
import MobileSidebar from './Components/MobileSidebar/mobileSidebar'
import './App.css'

class App extends Component {
  render() {
    return (
    	<Container className="App" >
			<MobileSidebar >
				<PageHeader />
			</MobileSidebar>
		</Container>
    )
  }
}

export default App
