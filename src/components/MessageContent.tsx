import React, { FC } from 'react';
import { MessageObject } from 'webex';

export interface Props {
  message: MessageObject;
}

const MessageContent: FC<Props> = ({ message }) => {
  if (message.html) {
    return <div className="MessageContent" dangerouslySetInnerHTML={{ __html: message.html }}/>;
  }

  if (message.markdown) {
    return <div className="MessageContent">{message.markdown}</div>;
  }

  return <div className="MessageContent">{message.text}</div>;
};

export default MessageContent;
