import React, { FC } from 'react';
import { MessageObject } from 'webex';
import EmojiMarkdown from './EmojiMarkdown';
import EmojiText from './EmojiText';

export interface Props {
  message: MessageObject;
}

const MessageContent: FC<Props> = ({ message }) => {
  if (message.text) {
    return (
      <div className="MessageContent">
        <EmojiMarkdown>{message.text}</EmojiMarkdown>
      </div>
    );
  }

  const text = message.html;
  if (text) {
    return (
      <div className="MessageContent">
        <EmojiText>{text}</EmojiText>
      </div>
    );
  }

  return null;
};

export default MessageContent;
