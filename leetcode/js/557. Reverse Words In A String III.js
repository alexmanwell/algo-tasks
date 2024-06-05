// https://leetcode.com/problems/reverse-words-in-a-string-iii

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  const words = s.split(" ");
  let result = new Array(words.length).fill("");
  for (let i = 0; i < words.length; i++) {
    result[i] = words[i].split("").reverse().join("");
  }

  return result.join(" ");
};