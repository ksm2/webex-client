import { expose } from 'comlink';
import { addRoom } from '../actions/room';
import paginate from '../helpers/paginate';
import createReduxStore from './createReduxStore';
import openDatabase from './openDatabase';
import webex from './webex';
import WorkerInterface from './WorkerInterface';

const store = createReduxStore();

const init = async () => {
  const db = await openDatabase;

  const idbRooms = await db.getAll('rooms');
  for (const idbRoom of idbRooms) {
    store.dispatch(addRoom(idbRoom));
  }

  for await (const room of paginate(webex.rooms.list({ max: 10 }))) {
    const oldRoom = await db.get('rooms', room.id);
    const value = { favorite: false, ...oldRoom, ...room };
    await db.put('rooms', value);
    store.dispatch(addRoom(value));
  }
};

init().catch(console.error);

const worker: WorkerInterface = {
  dispatch: store.dispatch,
  getState: store.getState,
  subscribe: (f: () => void) => {
    store.subscribe(f);
  },
};
expose(worker);
