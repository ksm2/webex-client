import { call, put, takeLatest } from 'redux-saga/effects';
import { MessageObject, Page } from 'webex';
import { addMessageToRoom, loadMessages } from '../actions/message';
import { LOAD_MESSAGES } from '../constants';
import webex from '../worker/webex';

const listMessages = async (roomId: string, max: number): Promise<Page<MessageObject>> => {
  return webex.getClient().messages.list({ roomId, max });
};

function* loadMessagesSaga(action: ReturnType<typeof loadMessages>): Saga {
  const { roomId, max } = action.payload;
  const messages: Page<MessageObject> = yield call(listMessages, roomId, max);
  for (const message of messages) {
    yield put(addMessageToRoom(roomId, message));
  }
}

function* messageSaga(): Saga {
  yield takeLatest(LOAD_MESSAGES, loadMessagesSaga);
}

export default messageSaga;
