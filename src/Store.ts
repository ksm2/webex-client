import { CounterState } from './reducers/counterReducer';
import { MessageState } from './reducers/messageReducer';
import { PersonState } from './reducers/personReducer';
import { RoomState } from './reducers/roomReducer';

interface Store {
  counter: CounterState;
  message: MessageState;
  person: PersonState;
  room: RoomState;
}

export default Store;
