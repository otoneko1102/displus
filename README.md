# displus
A package that add functions for Discord.

## Usage
```js
const displus = require('displus');
const { Client } = require('discord.js');
const client = new Client({ intents: [/*Required intents...*/] });

client.on('messageCreate', async message => {
  console.log(displus.removeHiddenText('Hello ||World||!')) // 'Hello !'
  console.log(displus.removeHiddenText('Hello <https://example.com/> !')) // 'Hello  !'
  console.log(displus.removeMarkdown('**Hello World!**')); // 'Hello World!'
  console.log(displus.removeMarkdown('Hello __World!__')); // 'Hello World!'
  console.log(displus.removeMarkdown('`Hello` __World!__')); // 'Hello World!'
  console.log(displus.removeMarkdown('Hello <https://example.com/> !')) // 'Hello https://example.com/ !'
  console.log(displus.removeMarkdown('Hello [World](https://example.com/)!')); // 'Hello World!'
  console.log(displus.removeMarkdown('# Hello World!', true)); // 'Hello World!'
  console.log(await displus.replaceMentions(client, guild, '<@957885295251034112>')); // '@otoneko.'
  console.log(displus.rawCode('```js\nconsole.log("Hello World!")\n```')); // 'console.log("Hello World!")
  console.log(displus.emojiId('<:check:1240681820815888505>')); // '1240681820815888505'
  console.log(displus.emojiId('<a:loading:1240671243875913819>')); // '1240671243875913819'
  const invitationText = "There are invitation links! https://discord.gg/yKW8wWKCnS https://discord.com/invite/YnNTMh6mT6";
  console.log(displus.getInvites(invitationText)); // ['yKW8wWKCnS', 'YnNTMh6mT6']
  console.log(displus.getInvites(invitationText, true)); // ['discord.gg/yKW8wWKCnS', 'discord.com/invite/YnNTMh6mT6']
  const embedObject = {
    author: 'This is an embed author!',
    title: 'This is an embed title!',
    redirect: 'https://example.com/',
    descripon: 'This is an embed description!',
    color: '#777000',
    image: 'https://i.imgur.com/EJOjIMC.jpeg'
  };
  console.log(displus.embed(embedObject)); // '[⁠︎]( EMBED URL )'
  console.log(displus.embed(embedObject, true)); // 'EMBED URL'
});
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>