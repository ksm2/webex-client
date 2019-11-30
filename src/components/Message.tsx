import React, { FC } from 'react';
import { MessageObject } from 'webex';
import formatTime from '../helpers/formatTime';
import './Message.css';
import MessageContent from './MessageContent';
import PersonName from './PersonName';

export interface Props {
  message: MessageObject;
}

const Message: FC<Props> = ({ message }) => (
  <div className="Message">
    <p>
      <PersonName id={message.personId} />
      <span className="MessageDate">{formatTime(message.created)}</span>
    </p>
    <MessageContent message={message} />
  </div>
);

export default Message;
