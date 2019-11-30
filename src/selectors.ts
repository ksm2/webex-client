import { Selector } from 'react-redux';
import { createSelector } from 'reselect';
import { MessageObject, PersonObject, RoomObject } from 'webex';
import Store from './Store';
import { CounterState } from './reducers/counterReducer';

export const selectCounter: Selector<Store, CounterState> = (store) => store.counter;

export const selectMessagesByRoomID = (id: string): Selector<Store, Op<MessageObject[]>> => (store) =>
  store.message[id];

export const selectPersonByID = (id: string): Selector<Store, Op<PersonObject>> => (store) => store.person[id];

export const selectRoomByID = (id: string): Selector<Store, Op<RoomObject>> => (store) => store.room[id];

export const selectRecentRooms: Selector<Store, RoomObject[]> = (store) => {
  const date = Date.now() - 14 * 86400000;
  return Object.values(store.room)
    .filter((room) => new Date(room.lastActivity).getTime() >= date)
    .sort((r1, r2) => r1.title.localeCompare(r2.title));
};

export const selectRecentGroups: Selector<Store, RoomObject[]> = createSelector(selectRecentRooms, (rooms) =>
  rooms.filter((room) => room.type === 'group'),
);

export const selectRecentPeople: Selector<Store, RoomObject[]> = createSelector(selectRecentRooms, (rooms) =>
  rooms.filter((room) => room.type === 'direct'),
);
