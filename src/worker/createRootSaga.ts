import { all } from 'redux-saga/effects';
import messageSaga from '../sagas/messageSaga';

function* createRootSaga(): Saga {
  yield all([messageSaga()]);
}

export default createRootSaga;
