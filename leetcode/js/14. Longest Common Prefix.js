// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (words) => {
  if(!words.length) {
    return '';
  }

  const candidates = words[0];
  const prefix = [];
  let isPrefix = true;
  for (let i = 0; i < candidates.length; i++) {
    for (let word of words) {
      if (word[i] !== candidates[i]) {
        isPrefix = false;
        break;
      }
    }
    if (isPrefix) {
      prefix.push(candidates[i]);
    }
  }

  return prefix.join("");
};