import React, { FC } from 'react';
import replaceEmojis from '../helpers/replaceEmojis';
import emojiSheet from 'emoji-datasource-apple/img/apple/sheets/32.png';

export interface Props {
  children: string;
}

const EmojiText: FC<Props> = ({ children }) => {
  let __html = replaceEmojis(emojiSheet, children);

  return <div dangerouslySetInnerHTML={{ __html }} />;
};

export default EmojiText;
