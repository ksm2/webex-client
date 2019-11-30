import { Selector } from 'react-redux';
import Store from './Store';
import { CounterState } from './reducers/counterReducer';

export const selectCounter: Selector<Store, CounterState> = (store) => store.counter;
