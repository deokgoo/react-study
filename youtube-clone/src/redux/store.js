import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from './middleware';
import rootReducer from './index';

// const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeWithDevTools(applyMiddleware(middleware));

export default createStore(
  rootReducer,
  enhancer
);