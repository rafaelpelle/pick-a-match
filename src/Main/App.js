import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from '../Utils/history'
import HomePage from '../Pages/HomePage/homePage'
import './App.css'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		history.listen((location, action) => {
			document.body.scrollTop = 0 // For Safari
			document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		})
	}

  	render() {
    	return (
			<Container className='App'>
				<Router history={ history } >
					<Switch>
						<Route exact={true} path='/' component={HomePage}/>
					</Switch>
				</Router>
			</Container>
    	)
  	}
}

export default App
