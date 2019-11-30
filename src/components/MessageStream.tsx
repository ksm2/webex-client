import React, { FC, useLayoutEffect, useRef } from 'react';
import { MessageObject } from 'webex';
import Message from './Message';
import './MessageStream.css';

export interface Props {
  messages: MessageObject[];
}

const MessageStream: FC<Props> = ({ messages }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scroll({ top: ref.current.scrollHeight });
    }
  }, [messages]);

  return (
    <div ref={ref} className="MessageStream">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageStream;
