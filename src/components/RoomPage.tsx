import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import useTitle from '../hooks/useTitle';
import { selectRoomByID } from '../selectors';
import './RoomPage.css';

export interface Props {
  id: string;
}

const RoomPage: FC<Props> = ({ id }) => {
  const room = useSelector(selectRoomByID(id));

  useTitle(room ? room.title : 'Loading ...');

  if (room === undefined) {
    return null;
  }

  return (
    <main className="Main RoomPage">
      <div className="RoomHeader">
        <h1>{room.title}</h1>
      </div>
    </main>
  );
};

export default RoomPage;
