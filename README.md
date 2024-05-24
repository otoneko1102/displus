# displus
A package that adds functions for Discord.

## Usage
```js
const displus = require('displus');

consle.log(displus.removeMarkdown('**Hello World!**')); // 'Hello World!'
consle.log(displus.removeMarkdown('Hello __World!__')); // 'Hello World!'
consle.log(displus.removeMarkdown('`Hello` __World!__')); // 'Hello World!'
consle.log(displus.removeMarkdown('Hello [World](https://example.com/)!')); // 'Hello World!'
console.log(displus.emojiId('<:check:1240681820815888505>')); // '1240681820815888505'
console.log(displus.emojiId('<a:loading:1240671243875913819>')); // '1240671243875913819'
const object = {
  author: 'This is an embed author!',
  title: 'This is an embed title!',
  redirect: 'https://example.com/',
  descripon: 'This is an embed description!',
  color: '#777000',
  image: 'https://i.imgur.com/EJOjIMC.jpeg'
};
console.log(displus.embed(object)); // 'EMBED URL'
console.log(displus.embed(object), true); // '[⁠︎]( EMBED URL )'
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>