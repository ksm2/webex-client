import { expose } from 'comlink';
import { login } from '../actions/identity';
import Identity from '../Identity';
import createReduxStore from './createReduxStore';
import openDatabase from './openDatabase';
import webex from './webex';
import WorkerInterface from './WorkerInterface';

const store = createReduxStore();

const init = async () => {
  const db = await openDatabase;

  const identity: Op<Identity> = await db.get('keyval', 'identity');
  if (identity) {
    webex.setAccessToken(identity.accessToken);
    store.dispatch(login(identity));
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
