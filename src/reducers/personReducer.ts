import { Reducer } from 'redux';
import { PersonObject } from 'webex';
import { ADD_PERSON } from '../constants';

export type PersonState = Record<string, PersonObject>;

const initialState = {};

const personReducer: Reducer<PersonState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PERSON:
      return { ...state, [payload.id]: payload.person };
    default:
      return state;
  }
};

export default personReducer;
