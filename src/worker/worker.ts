import { expose } from 'comlink';
import { addRoom } from '../actions/room';
import createReduxStore from './createReduxStore';
import webex from './webex';
import WorkerInterface from './WorkerInterface';

const store = createReduxStore();

webex.rooms.list({ max: 10 }).then(async (rooms) => {
  let page = rooms;
  while (true) {
    for (const room of page) {
      store.dispatch(addRoom(room));
    }
    if (page.hasNext()) {
      page = await page.next();
    } else {
      break;
    }
  }
});

const worker: WorkerInterface = {
  dispatch: store.dispatch,
  getState: store.getState,
  subscribe: (f: () => void) => {
    store.subscribe(f);
  },
};
expose(worker);
