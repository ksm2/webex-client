import { Reducer } from 'redux';
import { MessageObject } from 'webex';
import { ADD_MESSAGE_TO_ROOM } from '../constants';

export type MessageState = Record<string, MessageObject[]>;

const initialState = {};

const counterReducer: Reducer<MessageState> = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE_TO_ROOM:
      const messages = state[payload.roomId] || [];
      return { ...state, [payload.roomId]: [payload.message, ...messages] };
    default:
      return state;
  }
};

export default counterReducer;
