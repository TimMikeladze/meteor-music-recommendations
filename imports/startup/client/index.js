import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Meteor } from 'meteor/meteor';

import App from '../../containers/App';
import { configureStore } from '../../redux';
import { client } from '../../apollo';
import makeRoutes from '../../routes';

// Create the store using our configureStore function
const store = configureStore();

// Sync navigation events with the store.
// The `history` object is consumed by React Router.
const history = syncHistoryWithStore(browserHistory, store);

// Call function to return the app's route
const routes = makeRoutes();

// Create a root DOM element for React to render the app to.
Meteor.startup(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  render(
    <App client={client} history={history} routes={routes} store={store} />,
    root
  );
});
