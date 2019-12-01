import { Reducer } from 'redux';
import { ADD_ROOM, FAVORITE_ROOM } from '../constants';
import RoomEntity from '../entities/RoomEntity';

export type RoomState = Record<string, RoomEntity>;

const initialState = {};

const counterReducer: Reducer<RoomState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ROOM:
      return { ...state, [payload.id]: payload };
    case FAVORITE_ROOM:
      return { ...state, [payload.id]: { ...state[payload.id], favorite: payload.favorite } };
    default:
      return state;
  }
};

export default counterReducer;
