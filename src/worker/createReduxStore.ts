import { applyMiddleware, createStore, Middleware, Store as ReduxStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Store from '../Store';
import createReducer from './createReducer';
import createRootSaga from './createRootSaga';

const isDevEnvironment = process.env.NODE_ENV === 'development';

const createReduxStore = (): ReduxStore<Store> => {
  const middlewares: Middleware[] = [];
  if (isDevEnvironment) {
    const logger = createLogger({
      collapsed: true,
    });

    middlewares.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const store = createStore(createReducer(), applyMiddleware(...middlewares));

  sagaMiddleware.run(createRootSaga);

  return store;
};

export default createReduxStore;
