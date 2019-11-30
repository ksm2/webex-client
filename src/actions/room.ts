import { RoomObject } from 'webex';
import { ADD_ROOM } from '../constants';

export const addRoom = (room: RoomObject) => ({ type: ADD_ROOM, payload: room });
