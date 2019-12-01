import { DBSchema, IDBPDatabase, openDB } from 'idb';
import RoomEntity from '../entities/RoomEntity';

interface MyDB extends DBSchema {
  rooms: {
    value: RoomEntity;
    key: string;
  };
}

const openDatabase = (): Promise<IDBPDatabase<MyDB>> => {
  return openDB<MyDB>('webex', 1, {
    upgrade(db, oldVersion, newVersion, tx) {
      db.createObjectStore('rooms', {
        keyPath: 'id',
      });
    },
  });
};

const db = openDatabase();

export default db;
