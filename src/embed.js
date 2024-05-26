function embed(input, hide) {
  if (!input || typeof input !== 'object') throw new Error('input must be object.');
  if (hide && typeof hide !== 'boolean') throw new Error('hide must be boolean.');
  const url = "https://appembed.netlify.app/e?";
  const p = [];
  if (input.author) p.push(`author=${encodeURIComponent(input.author)}`);
  if (input.title) p.push(`title=${encodeURIComponent(input.title)}`);
  if (input.redirect) p.push(`redirect=${encodeURIComponent(input.redirect)}`);
  if (input.description) p.push(`description=${encodeURIComponent(input.description)}`);
  if (input.color) p.push(`color=${encodeURIComponent(input.color)}`);
  if (input.image) p.push(`image=${encodeURIComponent(input.image)}`);
  if (p.length == 0) throw new Error('parameter in object is incorrect.');
  if (hide === true) {
    return `[⁠︎]( ${url + p.join('&')} )`;
  } else {
    return url + p.join('&');
  }
}

module.exports = embed;