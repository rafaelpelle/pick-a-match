import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PageHeader from './Components/PageHeader/pageHeader'
import './App.css'

class App extends Component {
  render() {
    return (
    	<Container className="App" >
			<PageHeader />
		</Container>
    )
  }
}

export default App
