// https://leetcode.com/problems/most-common-word

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  const words = paragraph.toLocaleLowerCase().split(new RegExp(/[\s!?',;.]/)).filter(w => w.length > 0);
  let map = new Map();
  for (const word of words) {
    if (!banned.includes(word)) {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  let countLetter = ['', 0];
  for (const [word, amount] of map.entries()) {
    if (amount > countLetter[1]) {
      countLetter = [word, amount];
    }
  }

  return countLetter[0];
};