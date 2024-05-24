function removeHiddenText(input) {
  return input.replace(/\|\|.*?\|\|/g, '').replace(/<.*?>/g, '')
}

module.exports = removeHiddenText;
