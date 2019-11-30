import { all } from 'redux-saga/effects';
import messageSaga from '../sagas/messageSaga';
import personSaga from '../sagas/personSaga';

function* createRootSaga(): Saga {
  yield all([messageSaga(), personSaga()]);
}

export default createRootSaga;
