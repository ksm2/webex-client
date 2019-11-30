import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import Store from '../Store';

/**
 * Created on 2019-11-30.
 *
 * @author Konstantin Simon Maria Möllers
 */
interface WorkerInterface {
  dispatch: Dispatch<AnyAction>;
  getState(): Store;
  subscribe(listener: () => void): void;
}

export default WorkerInterface;
