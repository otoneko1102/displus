function getInvites(input, url) {
  if (!input || typeof input !== 'string') throw new Error('input must be a string.');
  if (url !== undefined && typeof url !== 'boolean') throw new Error('url must be a boolean.');

  const regex = /discord(?:app\.com\/invite|\.(?:com\/invite|gg))\/([^\s]+)/gi;
  const matches = [];
  let match;
  while ((match = regex.exec(input)) !== null) {
    if (url) {
      matches.push(match[0] + match[1]);
    } else {
      matches.push(match[1]);
    }
  }

  return matches;
}

module.exports = getInvites;