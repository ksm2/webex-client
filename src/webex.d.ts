declare module 'webex' {
  export interface Page<T> extends Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
    items: T[];
    length: number;
    next(): Promise<Page<T>>;
    hasNext(): boolean;
    previous(): Promise<Page<T>>;
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
    type: 'group' | 'direct';
  }

  export interface MessageObject {
    id: string; // (server generated) Unique identifier for the message
    html?: string;
    personId: string; // The ID for the author of the messasge
    personEmail: string; // The email for the author of the messasge
    roomId: string; // The ID for the room of the message
    text: string; // The message posted to the room in plain text
    markdown?: string; // The message posted to the room in markdown
    files: string[]; // The source URL(s) for the message attachment(s). See the Message Attachments Guide for a list of supported media types.
    created: string; // (server generated) The date and time that the message was created
  }

  export interface MessageList {
    max?: number;
    roomId?: string;
  }

  export interface ReadonlyCollection<T, L = { max?: number }> {
    list(options?: L): Promise<Page<T>>;
    get(object: Partial<T> | string): Promise<T>;
  }

  export interface Collection<T, L = { max?: number }> extends ReadonlyCollection<T, L> {
    create(room: Partial<T>): Promise<T>;
    remove(room: Partial<T>): Promise<T>;
  }

  export interface InitOptions {
    config?: any;
    credentials?: any;
  }

  export class Webex {
    static init(initOptions: InitOptions = {}): Webex;
    readonly people: ReadonlyCollection<PersonObject>;
    readonly rooms: Collection<RoomObject>;
    readonly messages: Collection<MessageObject, MessageList>;
  }

  export default Webex;
}
