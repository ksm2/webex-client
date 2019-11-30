import { expose } from 'comlink';
import { applyMiddleware, createStore, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import createReducer from './createReducer';
import WorkerInterface from './WorkerInterface';

const isDevEnvironment = process.env.NODE_ENV === 'development';

let middleware: StoreEnhancer<any> | undefined;
if (isDevEnvironment) {
  const logger = createLogger({
    collapsed: true,
  });

  middleware = applyMiddleware(logger);
}

const store = createStore(createReducer(), middleware);

const worker: WorkerInterface = {
  dispatch: store.dispatch,
  getState: store.getState,
  subscribe: (f: () => void) => {
    store.subscribe(f);
  },
};
expose(worker);
