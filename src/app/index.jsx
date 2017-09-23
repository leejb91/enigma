import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import ToviaComponent from './main/tovia.jsx';

class App extends React.Component {
	render() {
		return (
			<HashRouter hashType="noslash">
				<Route path="/:secret" component={ToviaComponent} />
			</HashRouter>
		);
	}
}

render(<App />, document.getElementById('app'));