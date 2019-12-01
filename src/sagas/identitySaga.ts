import { IDBPDatabase } from 'idb';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Page, PersonObject, RoomObject } from 'webex';
import { login, requestAccessToken } from '../actions/identity';
import { addRoom } from '../actions/room';
import { LOGIN, LOGOUT, REQUEST_ACCESS_TOKEN } from '../constants';
import fetchAccessToken, { AccessTokenResponse } from '../helpers/fetchAccessToken';
import Identity from '../Identity';
import openDatabase, { MyDB } from '../worker/openDatabase';
import webex from '../worker/webex';

const loadMe = async (accessToken: string): Promise<PersonObject> => {
  const headers: HeadersInit = {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch('https://api.ciscospark.com/v1/people/me', { headers });
  if (response.status !== 200) {
    throw new Error('Could not load identity');
  }

  return await response.json();
};

const storeIdentity = async (identity: Identity) => {
  const db = await openDatabase;

  await db.put('keyval', identity, 'identity');
};

function* requestAccessTokenSaga(action: ReturnType<typeof requestAccessToken>): Saga {
  const { code } = action.payload;

  const response: AccessTokenResponse = yield call(fetchAccessToken, code);
  webex.setAccessToken(response.access_token);
  const me: PersonObject = yield call(loadMe, response.access_token);

  const identity = { ...me, accessToken: response.access_token };
  yield call(storeIdentity, identity);

  yield put(login(identity));
}

function* loginSaga(): Saga {
  const db = yield call(() => openDatabase);

  const idbRooms = yield call(() => db.getAll('rooms'));
  for (const idbRoom of idbRooms) {
    yield put(addRoom(idbRoom));
  }

  let page: Page<RoomObject> = yield call(() => webex.getClient().rooms.list({ max: 10 }));
  while (true) {
    for (const room of page.items) {
      const oldRoom = yield call(() => db.get('rooms', room.id));
      const value = { favorite: false, ...oldRoom, ...room };
      yield call(() => db.put('rooms', value));
      yield put(addRoom(value));
    }

    if (page.hasNext()) {
      page = yield call(() => page.next());
    } else {
      break;
    }
  }
}

function* logoutSaga(): Saga {
  const db: IDBPDatabase<MyDB> = yield call(() => openDatabase);

  yield call(() => db.delete('keyval', 'identity'));
  yield call(() => db.clear('rooms'));
}

function* identitySaga(): Saga {
  yield takeLatest(REQUEST_ACCESS_TOKEN, requestAccessTokenSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

export default identitySaga;
