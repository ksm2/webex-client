import { expose } from 'comlink';
import { createStore } from 'redux';
import createReducer from './createReducer';
import WorkerInterface from './WorkerInterface';

const store = createStore(createReducer());

const worker: WorkerInterface = {
  dispatch: store.dispatch,
  getState: store.getState,
  subscribe: (f: () => void) => {
    store.subscribe(f);
  },
};
expose(worker);
