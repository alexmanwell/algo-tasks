// https://leetcode.com/problems/split-strings-by-separator

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
const splitWordsBySeparator = (words, separator) => {
  let list = [];
  for (let word of words) {
    list = [...list, ...word.split(`${separator}`)];
  }

  return list.filter(item => item.length > 0);
};