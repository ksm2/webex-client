import { DBSchema, IDBPDatabase, openDB } from 'idb';
import RoomEntity from '../entities/RoomEntity';

export interface MyDB extends DBSchema {
  keyval: {
    value: any;
    key: string;
  };
  rooms: {
    value: RoomEntity;
    key: string;
  };
}

const openDatabase = (): Promise<IDBPDatabase<MyDB>> => {
  return openDB<MyDB>('webex', 2, {
    upgrade(db, oldVersion, newVersion, tx) {
      db.createObjectStore('rooms', {
        keyPath: 'id',
      });
      if (oldVersion < 2) {
        db.createObjectStore('keyval');
      }
    },
  });
};

const db = openDatabase();

export default db;
