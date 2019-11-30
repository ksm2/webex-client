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

export const selectAllRooms: Selector<Store, RoomObject[]> = (store) =>
  Object.values(store.room).sort((r1, r2) => r1.title.localeCompare(r2.title));

export const selectAllGroups: Selector<Store, RoomObject[]> = createSelector(selectAllRooms, (rooms) =>
  rooms.filter((room) => room.type === 'group'),
);

export const selectAllPeople: Selector<Store, RoomObject[]> = createSelector(selectAllRooms, (rooms) =>
  rooms.filter((room) => room.type === 'direct'),
);
