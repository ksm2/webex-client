import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteRooms, selectRecentGroups, selectRecentPeople } from '../selectors';
import './Navigation.css';
import RoomList from './RoomList';

const Navigation: FC = () => {
  const favorites = useSelector(selectFavoriteRooms);
  const groups = useSelector(selectRecentGroups);
  const people = useSelector(selectRecentPeople);

  return (
    <aside className="Navigation">
      <h2>Favorites</h2>
      <RoomList rooms={favorites} />

      <h2>Groups</h2>
      <RoomList rooms={groups} />

      <h2>People</h2>
      <RoomList rooms={people} />
    </aside>
  );
};

export default Navigation;
