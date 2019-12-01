import { all } from 'redux-saga/effects';
import messageSaga from '../sagas/messageSaga';
import personSaga from '../sagas/personSaga';
import roomSaga from '../sagas/roomSaga';

function* createRootSaga(): Saga {
  yield all([messageSaga(), personSaga(), roomSaga()]);
}

export default createRootSaga;
