import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import loan from '../reducers/loan';
import createLoan from '../reducers/createLoan';

const reducer = combineReducers({
  loan,
  createLoan,
  routing: routerReducer
});

export default createStore(reducer, applyMiddleware(thunk));
