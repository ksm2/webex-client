import { AnyAction } from 'redux';
import { LOGIN, LOGOUT, REQUEST_ACCESS_TOKEN } from '../constants';
import Identity from '../Identity';

export const requestAccessToken = (code: string) => ({ type: REQUEST_ACCESS_TOKEN, payload: { code } });

export const login = (identity: Identity): AnyAction => ({ type: LOGIN, payload: { identity } });

export const logout = (): AnyAction => ({ type: LOGOUT });
