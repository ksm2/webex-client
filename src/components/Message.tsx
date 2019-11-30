import classNames from 'classnames';
import React, { FC } from 'react';
import { MessageObject } from 'webex';
import formatTime from '../helpers/formatTime';
import './Message.css';
import DayLine from './DayLine';
import MessageContent from './MessageContent';
import PersonAvatar from './PersonAvatar';
import PersonName from './PersonName';

export interface Props {
  message: MessageObject;
  withDate: boolean;
  withHeader: boolean;
}

const Message: FC<Props> = ({ message, withDate, withHeader }) => (
  <>
    {withDate && <DayLine day={message.created.substr(0, 10)} />}
    <div className={classNames('Message', { withHeader })}>
      <div className="MessageLeft">
        {withHeader ? (
          <PersonAvatar id={message.personId} />
        ) : (
          <span className="MessageDate">{formatTime(message.created)}</span>
        )}
      </div>
      <div className="MessageRight">
        {withHeader && (
          <div className="MessageHeader">
            <PersonName id={message.personId} />
            <span className="MessageDate">{formatTime(message.created)}</span>
          </div>
        )}
        <MessageContent message={message} />
      </div>
    </div>
  </>
);

export default Message;
