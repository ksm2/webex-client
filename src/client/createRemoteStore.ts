import * as Comlink from 'comlink';
// eslint-disable-next-line
import Worker from 'worker-loader!../worker/worker';
import WorkerInterface from '../worker/WorkerInterface';
import { AnyAction, Store, Observable } from 'redux';

const createRemoteStore = async (): Promise<Store<any, AnyAction>> => {
  const store = Comlink.wrap<WorkerInterface>(new Worker());

  const subscribers = new Set<() => void>();

  let latestState = await store.getState();
  store.subscribe(
    Comlink.proxy(async () => {
      latestState = await store.getState();
      subscribers.forEach((f) => f());
    })
  );

  return {
    [Symbol.observable](): Observable<any> {
      throw new Error('Not supported');
    },
    dispatch: (action) => {
      store.dispatch(action);
      return action;
    },
    getState: () => latestState,
    subscribe: (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    replaceReducer: () => {
      throw new Error("Can’t transfer a function");
    }
  };
};

export default createRemoteStore;
