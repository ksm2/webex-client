import { Reducer } from 'redux';
import { DECREMENT, INCREMENT } from '../constants';

export type CounterState = number;

const counterReducer: Reducer<CounterState> = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
