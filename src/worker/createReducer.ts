import { Reducer, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import Store from '../Store';

const createReducer = (): Reducer<Store> =>
  combineReducers({
    counter: counterReducer,
  });

export default createReducer;
