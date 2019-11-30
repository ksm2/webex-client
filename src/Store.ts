import { CounterState } from './reducers/counterReducer';
import { RoomState } from './reducers/roomReducer';

interface Store {
  counter: CounterState;
  room: RoomState;
}

export default Store;
