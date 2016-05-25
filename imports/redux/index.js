import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { client } from '../apollo';

// List the reducers used by modules in the app.
const appReducers = {

};

const configureStore = (initialState = {}) =>
  createStore(
    combineReducers({
      apollo: client.reducer(),
      routing: routerReducer,
      ...appReducers,
    }),
    initialState,
    compose(
      applyMiddleware(client.middleware()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export { configureStore };
