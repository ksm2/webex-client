import { Reducer } from 'redux';
import { LOGIN, LOGOUT } from '../constants';
import Identity from '../Identity';

export type IdentityState = Identity | null;

const initialState: IdentityState = null;

const identityReducer: Reducer<IdentityState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return payload.identity;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default identityReducer;
