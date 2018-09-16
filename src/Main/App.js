import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import MobileSidebar from '../Components/MobileSidebar/mobileSidebar'
import PageHeader from '../Components/PageHeader/pageHeader'
import PickMatchButton from '../Components/PickMatchButton/pickMatchButton'
import './App.css'


class App extends Component {
  render() {
    return (
    	<Container className="App" >
			<MobileSidebar >
				<PageHeader />
				<PickMatchButton />
			</MobileSidebar>
		</Container>
    )
  }
}

export default App
