/// <reference types="react-scripts" />
type Op<T> = T | undefined;
type Saga = Generator<import('redux-saga/effects').Effect, void, any>;

declare module 'worker-loader!*' {
  interface WorkerConstructor {
    new (options?: WorkerOptions): Worker;
  }

  const worker: WorkerConstructor;
  export default worker;
}
