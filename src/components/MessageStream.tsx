import React, { FC, useLayoutEffect, useRef } from 'react';
import { MessageObject } from 'webex';
import isDifferentDay from '../helpers/isDifferentDay';
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
      {messages.map((message, index) => {
        const lastMessage = index > 0 ? messages[index - 1] : null;
        const withDate = !lastMessage || isDifferentDay(lastMessage.created, message.created);
        const withHeader = !lastMessage || withDate || lastMessage.personId !== message.personId;

        return <Message key={message.id} message={message} withDate={withDate} withHeader={withHeader} />;
      })}
    </div>
  );
};

export default MessageStream;
