async function replaceMentions(client, guild, text) {
  let replacedContent = text;

  replacedContent = await replaceAsync(replacedContent, /<#(\d+)>/g, async (match, channelId) => {
    const channel = await client.channels.cache.get(channelId);
    return channel ? `#${channel.name}` : '!';
  });

  replacedContent = await replaceAsync(replacedContent, /<@&(\d+)>/g, async (match, roleId) => {
    const role = await guild.roles.cache.get(roleId);
    return role ? `@${role.name}` : '!';
  });

  replacedContent = await replaceAsync(replacedContent, /<@(\d+)>/g, async (match, userId) => {
    const user = await client.users.fetch(userId);
    return user ? `@${user.tag}` : '!';
  });

  return replacedContent;
}

async function replaceAsync(str, regex, asyncFn) {
  const promises = [];
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
  });

  const replacements = await Promise.all(promises);
  return str.replace(regex, () => replacements.shift());
}

module.exports = replaceMentions;