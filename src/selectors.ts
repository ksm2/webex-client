import { Selector } from 'react-redux';
import { createSelector } from 'reselect';
import { MessageObject, PersonObject } from 'webex';
import RoomEntity from './entities/RoomEntity';
import { CounterState } from './reducers/counterReducer';
import { IdentityState } from './reducers/identityReducer';
import Store from './Store';

export const selectCounter: Selector<Store, CounterState> = (store) => store.counter;

export const selectIdentity: Selector<Store, IdentityState> = (store) => store.identity;

export const selectMessagesByRoomID = (id: string): Selector<Store, Op<MessageObject[]>> => (store) =>
  store.message[id];

export const selectPersonByID = (id: string): Selector<Store, Op<PersonObject>> => (store) => store.person[id];

export const selectRoomByID = (id: string): Selector<Store, Op<RoomEntity>> => (store) => store.room[id];

export const selectFavoriteRooms: Selector<Store, RoomEntity[]> = (store) => {
  return Object.values(store.room)
    .filter((room) => room.favorite)
    .sort((r1, r2) => r1.title.localeCompare(r2.title))
    .sort((r1, r2) => -r1.type.localeCompare(r2.type));
};

export const selectRecentRooms: Selector<Store, RoomEntity[]> = (store) => {
  const date = Date.now() - 14 * 86400000;
  return Object.values(store.room)
    .filter((room) => !room.favorite)
    .filter((room) => new Date(room.lastActivity).getTime() >= date)
    .sort((r1, r2) => r1.title.localeCompare(r2.title));
};

export const selectRecentGroups: Selector<Store, RoomEntity[]> = createSelector(selectRecentRooms, (rooms) =>
  rooms.filter((room) => room.type === 'group'),
);

export const selectRecentPeople: Selector<Store, RoomEntity[]> = createSelector(selectRecentRooms, (rooms) =>
  rooms.filter((room) => room.type === 'direct'),
);
