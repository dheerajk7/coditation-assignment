import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
let store;
// creating store to maintain status using combine reducer
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
