// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence

/**
 * @param {string} sentence
 * @param {string} prefix
 * @return {number}
 */
const isPrefixOfWord = (sentence, prefix) => {
  const words = sentence.split(" ");
  const size = prefix.length;
  let index = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < size) {
      continue;
    }
    if (words[i].substring(0, size) === prefix) {
      index = i + 1;
      break;
    }
  }

  return index;
};