import '../common/lib';
import App from '../containers/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore';

// First we import some modules...
import { Router, Route, IndexRoute } from 'react-router';
import history from '../common/history';

import Index from '../components/Index/Index';
import Inbox from '../components/Index/Inbox';

// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from '../containers/DevTools';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

ReactDOM.render( 
	<Provider store={store}>
		<div>
			<Router history={history}>
		    <Route path="/" component={App}>
		      <IndexRoute component={Index} />
		      <Route path="index" component={Index} />
		      <Route path="inbox" component={Inbox} />
		    </Route>
		  </Router>
		  <DevTools />
	  </div>
  </Provider>, document.getElementById('react-content'));
