function rawCode(input) {
  const patterns = [
    /```(?:[^\n]+)?\n([\s\S]*?)\n```/g,
  ];
  const result = patterns.reduce((acc, pattern) => acc.replace(pattern, '$1'), input);
  return result;
}

module.exports = rawCode;