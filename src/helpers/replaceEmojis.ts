import EmojiChar from 'emoji-data/lib/emoji_char';
import EMOJI_MAP from 'emoji-datasource-apple/emoji.json';
import punycode from 'punycode';
import escapeRegExp from './escapeRegExp';

const EMOJI_CHARS = EMOJI_MAP.map((charBlob) => new EmojiChar(charBlob));

const EMOJI_CHAR_UNIFIED_MAP: Record<string, EmojiChar> = {};
for (const ec of EMOJI_CHARS) {
  EMOJI_CHAR_UNIFIED_MAP[ec.unified] = ec;
  for (const variant of ec.variations) {
    EMOJI_CHAR_UNIFIED_MAP[variant] = ec;
  }
}

const rjust = (str: string, length: number, fillString: string): string => {
  return str.padStart(length, fillString);
};

const chars = () => {
  const allWithVariants = EMOJI_CHARS.filter((ec) => ec.has_variants());
  const norms = EMOJI_CHARS.map((ec) => ec.render({ variant_encoding: false }));
  const extra = allWithVariants.map((ec) => ec.render({ variant_encoding: true }));

  return [...norms, ...extra];
};

const charToUnified = (char: string) => {
  let cp: number;
  const cps = punycode.ucs2.decode(char);
  const hexes = (function() {
    let m, len4: number;
    const _results = [];
    for (m = 0, len4 = cps.length; m < len4; m++) {
      cp = cps[m];
      _results.push(rjust(cp.toString(16), 4, '0'));
    }
    return _results;
  })();
  return hexes.join('-').toUpperCase();
};

const fromUnified = (uid: string): EmojiChar => {
  return EMOJI_CHAR_UNIFIED_MAP[uid.toUpperCase()];
};

const FBS_REGEXP = new RegExp(
  `(?:${chars()
    .map(escapeRegExp)
    .join(`|`)})`,
  'g',
);

const replaceEmojis = (emojiSheet: string, str: string) => {
  FBS_REGEXP.lastIndex = 0;

  return str.replace(FBS_REGEXP, (match) => {
    const unified = fromUnified(charToUnified(match));
    const title = unified.short_name;
    const x = -unified.sheet_x * 24;
    const y = -unified.sheet_y * 24;
    const style = `background-image: url('${emojiSheet}'); background-position: ${x}px ${y}px;`;

    return `<span class="Emoji" title="${title}" style="${style}"></span>`;
  });
};

export default replaceEmojis;
