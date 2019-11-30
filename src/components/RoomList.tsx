import React, { FC } from 'react';
import { RoomObject } from 'webex';
import './RoomList.css';

export interface Props {
  rooms: RoomObject[];
}

const RoomList: FC<Props> = ({ rooms }) => (
  <ul className="RoomList">
    {rooms.map((room) => (
      <li key={room.id}>
        <a href="#">{room.title}</a>
      </li>
    ))}
  </ul>
);

export default RoomList;
