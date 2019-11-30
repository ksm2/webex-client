import { Reducer } from 'redux';
import { RoomObject } from 'webex';
import { ADD_ROOM } from '../constants';

export type RoomState = Record<string, RoomObject>;

const initialState = {};

const counterReducer: Reducer<RoomState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ROOM:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default counterReducer;
