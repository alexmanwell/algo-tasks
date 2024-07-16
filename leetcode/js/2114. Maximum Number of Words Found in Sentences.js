// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => {
  let max = 0;
  for (const sentence of sentences) {
    const countWords = sentence.split(" ").length;
    max = Math.max(countWords, max);
  }

  return max;
};