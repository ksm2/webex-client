import { CounterState } from './reducers/counterReducer';
import { IdentityState } from './reducers/identityReducer';
import { MessageState } from './reducers/messageReducer';
import { PersonState } from './reducers/personReducer';
import { RoomState } from './reducers/roomReducer';

interface Store {
  counter: CounterState;
  identity: IdentityState;
  message: MessageState;
  person: PersonState;
  room: RoomState;
}

export default Store;
