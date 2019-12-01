import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'react-router5';
import { logout } from '../actions/identity';
import { loadMessages } from '../actions/message';
import { favoriteRoom } from '../actions/room';
import useTitle from '../hooks/useTitle';
import { selectMessagesByRoomID, selectRoomByID } from '../selectors';
import Icon from './Icon';
import MessageStream from './MessageStream';
import './RoomPage.css';

export interface Props {
  id: string;
}

const RoomPage: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const room = useSelector(selectRoomByID(id));
  const messages = useSelector(selectMessagesByRoomID(id));
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.navigate('home');
  };

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
        <h1>
          <Icon type="star" solid={room.favorite} /> {room.title}
        </h1>
        <button onClick={() => dispatch(favoriteRoom(room.id, !room.favorite))}>
          {room.favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <MessageStream messages={messages || []} />
    </main>
  );
};

export default RoomPage;
