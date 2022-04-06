import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

import Counter from './components/counter';
import TracksCollection from './components/trackcollection';
import reducer from './reducers';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
	render(){
		return(
			<div className='app'>
				{/*<h3>App React</h3>*/}
				<Counter />
				<TracksCollection />
			</div>
			)
	}
}

const appElement = document.getElementById("app");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, appElement);