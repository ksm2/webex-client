/* eslint-disable no-restricted-globals */
import { expose } from 'comlink';
import { applyMiddleware, createStore, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import Webex from 'webex';
import createReducer from './createReducer';
import WorkerInterface from './WorkerInterface';

const isDevEnvironment = process.env.NODE_ENV === 'development';

// Fake window object for Webex
// @ts-ignore
self.window = {
  location: self.location,
};

let middleware: StoreEnhancer<any> | undefined;
if (isDevEnvironment) {
  const logger = createLogger({
    collapsed: true,
  });

  middleware = applyMiddleware(logger);
}

const webex = Webex.init({
  credentials: {
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  },
});

webex.rooms.list({ max: 20 }).then((rooms) => {
  console.log(rooms.items);
  console.log(rooms.hasNext());
});

const store = createStore(createReducer(), middleware);

const worker: WorkerInterface = {
  dispatch: store.dispatch,
  getState: store.getState,
  subscribe: (f: () => void) => {
    store.subscribe(f);
  },
};
expose(worker);
