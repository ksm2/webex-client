import { AnyAction } from 'redux';
import { MessageObject } from 'webex';
import { ADD_MESSAGE_TO_ROOM, LOAD_MESSAGES } from '../constants';

export const addMessageToRoom = (roomId: string, message: MessageObject): AnyAction => ({
  type: ADD_MESSAGE_TO_ROOM,
  payload: { roomId, message },
});

export const loadMessages = (roomId: string, max: number) => ({
  type: LOAD_MESSAGES,
  payload: { roomId, max },
});
