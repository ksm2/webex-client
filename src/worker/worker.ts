import * as Comlink from 'comlink';
import WorkerInterface from './WorkerInterface';

const add = (a: number, b: number): number => {
  return a + b;
}

const workerInterface: WorkerInterface = {
  add,
}

Comlink.expose(workerInterface);
