import { takeLatest } from 'redux-saga/effects';
import { favoriteRoom } from '../actions/room';
import { FAVORITE_ROOM } from '../constants';
import openDatabase from '../worker/openDatabase';

function* favoriteRoomSaga(action: ReturnType<typeof favoriteRoom>): Saga {
  openDatabase.then(async (db) => {
    const room = await db.get('rooms', action.payload.id);
    if (room) {
      await db.put('rooms', { ...room, favorite: action.payload.favorite });
    }
  });
}

function* roomSaga(): Saga {
  yield takeLatest(FAVORITE_ROOM, favoriteRoomSaga);
}

export default roomSaga;
