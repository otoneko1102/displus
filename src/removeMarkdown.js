function removeMarkdown(input, extra = false) {
  if (!input || typeof input !== 'string') throw new Error('input must be string.');
  if (typeof extra !== 'boolean') throw new Error('extra must be boolean.')
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
    /<(?![@#]|a:[^:]+:\d+|:[^:]+:|\/\w+:\w+>)(.*?)>/g, // <link>
    /\[([^\]]+)\]\([^\)]+\)/g // [Hyper](link)
  ];
  const result = (markdownPatterns.reduce((acc, pattern) => acc.replace(pattern, '$1'), input)).replace(/<:>/g, ':');
  if (!extra) return result;

  const extraMarkdownPatterns = [
    /^\s*-\s+(?=\S)/gm, // - list
    /^\s*\*\s+(?=\S)/gm, // * list
    /^\s*#{1,3}\s+(?=\S)/gm, // # highlight
    /^\s*?-#\s+(?=\S)/gm // -# highlight
  ];

  return extraMarkdownPatterns.reduce((acc, pattern) => acc.replace(pattern, ''), result);
}

module.exports = removeMarkdown;
