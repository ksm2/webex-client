import { Reducer, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import identityReducer from '../reducers/identityReducer';
import messageReducer from '../reducers/messageReducer';
import personReducer from '../reducers/personReducer';
import roomReducer from '../reducers/roomReducer';
import Store from '../Store';

const createReducer = (): Reducer<Store> =>
  combineReducers<Store>({
    counter: counterReducer,
    identity: identityReducer,
    message: messageReducer,
    person: personReducer,
    room: roomReducer,
  });

export default createReducer;
