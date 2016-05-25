import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';

// This is the root component of our app. It wraps the app with an `ApolloProvider`,
// making the Redux store available to Apollo's `connect` calls later down the component hierarchy.
// Redux users you'll notice right away that this pattern feels familiar.
// In fact, underneath the scenes `ApolloProvider` is acting as wrapper around
// the `Provider` from `react-redux` and adding an additional required `client` prop.

// At this time `Router` is rendered as well, wrapping the passed in routes
// making them accessible from the browser.
// Learn more about `react-router` usage here: https://github.com/reactjs/react-router/tree/master/docs
const App = ({ client, history, routes, store }) => (
  <ApolloProvider client={client} store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </ApolloProvider>
);

App.propTypes = {
  client: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  routes: React.PropTypes.element.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default App;
