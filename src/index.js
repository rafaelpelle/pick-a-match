import React from 'react';
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import './index.css'
import App from './Main/App'
import registerServiceWorker from './registerServiceWorker'
import './semantic/dist/semantic.min.css'
import reducers from './Main/reducers'

const devTools = (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()
export const store = applyMiddleware(thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	, document.getElementById('root'))

registerServiceWorker()
