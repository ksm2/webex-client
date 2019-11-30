import { call, put, takeEvery } from 'redux-saga/effects';
import { PersonObject } from 'webex';
import { addPerson, loadPersonByID } from '../actions/person';
import { LOAD_PERSON_BY_ID } from '../constants';
import webex from '../worker/webex';

const loadCache = new Map<string, Promise<PersonObject>>();
const getPerson = (id: string) => {
  let promise = loadCache.get(id);
  if (!promise) {
    promise = webex.people.get(id);
    loadCache.set(id, promise);
  }

  return promise;
};

function* loadPersonByIDSaga(action: ReturnType<typeof loadPersonByID>): Saga {
  const { id } = action.payload;
  const person: PersonObject = yield call(getPerson, id);
  yield put(addPerson(id, person));
}

function* personSaga(): Saga {
  yield takeEvery(LOAD_PERSON_BY_ID, loadPersonByIDSaga);
}

export default personSaga;
