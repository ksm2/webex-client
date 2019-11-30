import { CounterState } from './reducers/counterReducer';
import { MessageState } from './reducers/messageReducer';
import { RoomState } from './reducers/roomReducer';

interface Store {
  counter: CounterState;
  message: MessageState;
  room: RoomState;
}

export default Store;
