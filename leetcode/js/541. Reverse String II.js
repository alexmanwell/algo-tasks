// https://leetcode.com/problems/reverse-string-ii

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  let result = "";
  let index = 0;
  while (index < s.length) {
    result += s.substring(index, index + k).split("").reverse().join("");
    result += s.substring(index + k, index + 2 * k);
    index += 2 * k;
  }

  return result;
};