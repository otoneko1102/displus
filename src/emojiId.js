function emojiId(input) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');
  const regex = /<a?:\w+:(\d+)>/;
  const match = input.match(regex);
  return match ? `${match[1]}` : null;
}

module.exports = emojiId;