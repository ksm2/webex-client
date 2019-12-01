import { RoomObject } from 'webex';
import { ADD_ROOM, FAVORITE_ROOM } from '../constants';

export const addRoom = (room: RoomObject) => ({ type: ADD_ROOM, payload: room });

export const favoriteRoom = (id: string, favorite: boolean) => ({ type: FAVORITE_ROOM, payload: { id, favorite } });
