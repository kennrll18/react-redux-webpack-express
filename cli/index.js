import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Main from './js/pages/Main';
import PageTwo from './js/pages/PageTwo';
import PageThree from './js/pages/PageThree';
import store from './js/store';

const rootElement = document.getElementById('root');

const history = syncHistoryWithStore(browserHistory, store);

render (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={PageTwo} />
				<Route path="/test" component={PageThree}></Route>
			</Route>
		</Router>
	</Provider>,
	rootElement
)