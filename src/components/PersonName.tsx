import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPersonByID } from '../actions/person';
import { selectPersonByID } from '../selectors';
import './PersonName.css';

export interface Props {
  id: string;
}

const PersonName: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const person = useSelector(selectPersonByID(id));

  useEffect(() => {
    if (!person) {
      dispatch(loadPersonByID(id));
    }
  }, [dispatch, id, person]);

  if (!person) {
    return (
      <>
        <div className="PersonAvatar" />
        <div className="PersonName">
          <em>Loading ...</em>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="PersonAvatar" style={{ backgroundImage: `url(${person.avatar})` }} />
      <div className="PersonName">{person.displayName}</div>
    </>
  );
};

export default PersonName;
