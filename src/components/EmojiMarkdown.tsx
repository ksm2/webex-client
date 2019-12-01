import React, { FC } from 'react';
import showdown from 'showdown';
import replaceEmojis from '../helpers/replaceEmojis';
import emojiSheet from 'emoji-datasource-apple/img/apple/sheets/32.png';

export interface Props {
  children: string;
}

const converter = new showdown.Converter({ ghCodeBlocks: true, openLinksInNewWindow: true, simplifiedAutoLink: true });

const EmojiMarkdown: FC<Props> = ({ children }) => {
  let __html = replaceEmojis(emojiSheet, converter.makeHtml(children));

  return <div dangerouslySetInnerHTML={{ __html }} />;
};

export default EmojiMarkdown;
