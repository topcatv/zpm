import '../common/lib';
import App from '../containers/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore';

// First we import some modules...
import { Router, Route, IndexRoute } from 'react-router';
import history from '../common/history';

import Index from '../components/Index/Index';
import Inbox from '../components/Index/Inbox';

let store = configureStore();

ReactDOM.render( 
	<Provider store={store}>
			<Router history={history}>
		    <Route path="/" component={App}>
		      <IndexRoute component={Index} />
		      <Route path="index" component={Index} />
		      <Route path="inbox" component={Inbox} />
		    </Route>
		  </Router>
  </Provider>, document.getElementById('react-content'));
