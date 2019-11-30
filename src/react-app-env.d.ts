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

declare module 'emoji-data/lib/emoji_char' {
  export class EmojiChar {
    constructor(blob: any);
    unified: string;
    short_name: string;
    variations: string[];
    sheet_x: number;
    sheet_y: number;
    has_variants(): boolean;
    render(options: { variant_encoding: boolean }): string;
  }

  export default EmojiChar;
}
