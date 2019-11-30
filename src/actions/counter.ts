import { Action } from 'redux';
import { DECREMENT, INCREMENT } from '../constants';

export const increment = (): Action<typeof INCREMENT> => ({ type: INCREMENT });

export const decrement = (): Action<typeof DECREMENT> => ({ type: DECREMENT });
