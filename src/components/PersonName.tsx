import React, { FC } from 'react';
import './PersonName.css';

export interface Props {
  id: string;
}

const PersonName: FC<Props> = ({ id }) => {
  return <span className="PersonName">{id}</span>;
};

export default PersonName;
