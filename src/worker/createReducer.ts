import { Reducer, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import roomReducer from '../reducers/roomReducer';
import Store from '../Store';

const createReducer = (): Reducer<Store> =>
  combineReducers({
    counter: counterReducer,
    room: roomReducer,
  });

export default createReducer;
