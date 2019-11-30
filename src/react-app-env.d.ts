/// <reference types="react-scripts" />
declare module 'worker-loader!*' {
  interface WorkerConstructor {
    new(options?: WorkerOptions): Worker;
  }

  const worker: WorkerConstructor;
  export default worker;
}
