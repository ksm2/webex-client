import React, { FC } from 'react';
import { Link } from 'react-router5';
import { RoomObject } from 'webex';
import './RoomList.css';

export interface Props {
  rooms: RoomObject[];
}

const RoomList: FC<Props> = ({ rooms }) => (
  <ul className="RoomList">
    {rooms.map((room) => (
      <li key={room.id}>
        <Link routeName="rooms.show" routeParams={{ id: room.id }} activeClassName="active">
          {room.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default RoomList;
