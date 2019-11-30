import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../actions/message';
import useTitle from '../hooks/useTitle';
import { selectMessagesByRoomID, selectRoomByID } from '../selectors';
import MessageStream from './MessageStream';
import './RoomPage.css';

export interface Props {
  id: string;
}

const RoomPage: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const room = useSelector(selectRoomByID(id));
  const messages = useSelector(selectMessagesByRoomID(id));

  useTitle(room ? room.title : 'Loading ...');

  useEffect(() => {
    if (!messages) {
      dispatch(loadMessages(id, 25));
    }
  }, [dispatch, id, messages]);

  if (room === undefined) {
    return null;
  }

  return (
    <main className="Main RoomPage">
      <div className="RoomHeader">
        <h1>{room.title}</h1>
      </div>
      <MessageStream messages={messages || []} />
    </main>
  );
};

export default RoomPage;
