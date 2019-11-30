declare module 'webex' {
  export interface Page<T> extends Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
    items: T[];
    length: number;
    next(): Page<T>;
    hasNext(): boolean;
    previous(): Page<T>;
    hasPrevious(): boolean;
  }

  export interface PersonObject {
    id: string;
    emails: string[];
    displayName: string;
    created: string;
  }

  export interface RoomObject {
    id: string;
    title: string;
    teamId: string;
    created: string;
  }

  export interface ReadonlyCollection<T> {
    list(options?: { max?: number }): Promise<Page<T>>;
    get(object: Partial<T> | string): Promise<T>;
  }

  export interface Collection<T> extends ReadonlyCollection<T> {
    create(room: Partial<T>): Promise<T>;
  }

  export interface InitOptions {
    config?: any;
    credentials?: any;
  }

  export class Webex {
    static init(initOptions: InitOptions = {}): Webex;
    readonly people: ReadonlyCollection<PersonObject>;
    readonly rooms: Collection<RoomObject>;
  }

  export default Webex;
}
