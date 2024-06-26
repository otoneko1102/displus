function removeMarkdown(input) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');
  const markdownPatterns = [
    /\*\*\*(.*?)\*\*\*/g, // ***bold & italic***
    /\*\*(.*?)\*\*/g, // **bold**
    /\*(.*?)\*/g, // *italic*
    /___(.*?)___/g, // ___underline & italic___
    /__(.*?)__/g, // __underline__
    /_(.*?)_/g, // _italic_
    /~~(.*?)~~/g, // ~~strikethrough~~
    /```(?:[^\n]+)?\n([\s\S]*?)\n```/g, // ```code block```
    /`(.*?)`/g, // `inline code`
    /\|\|(.*?)\|\|/g, // ||spoiler||
    /<(?![@#]|:[^:]+:|\/\w+:\w+>)(.*?)>/g, // <link>
    /\[([^\]]+)\]\([^\)]+\)/g // [Hyper](link)
  ];
  const result = markdownPatterns.reduce((acc, pattern) => acc.replace(pattern, '$1'), input);
  return result.replace(/<:>/g, ':');
}

module.exports = removeMarkdown;