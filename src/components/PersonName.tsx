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
      <span className="PersonName">
        <em>Loading ...</em>
      </span>
    );
  }

  return <span className="PersonName">{person.displayName}</span>;
};

export default PersonName;
