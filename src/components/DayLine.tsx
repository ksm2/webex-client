import React, { FC } from 'react';
import './DayLine.css';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

export interface Props {
  day: string;
}

const DayLine: FC<Props> = ({ day }) => {
  const [year, month, dom] = day.split('-', 3).map((str) => parseInt(str, 10));
  const date = new Date(year, month - 1, dom);

  return (
    <div className="DayLine">
      {weekdays[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
    </div>
  );
};

export default DayLine;
