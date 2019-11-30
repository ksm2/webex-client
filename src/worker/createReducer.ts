import { Reducer, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import messageReducer from '../reducers/messageReducer';
import roomReducer from '../reducers/roomReducer';
import Store from '../Store';

const createReducer = (): Reducer<Store> =>
  combineReducers<Store>({
    counter: counterReducer,
    message: messageReducer,
    room: roomReducer,
  });

export default createReducer;
