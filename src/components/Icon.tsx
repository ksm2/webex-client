import React, { FC } from 'react';

export interface Props {
  type: string;
  solid?: boolean;
}

const Icon: FC<Props> = ({ type, solid = true }) => <span className={`fa${solid ? 's' : 'r'} fa-${type}`} />;

export default Icon;
