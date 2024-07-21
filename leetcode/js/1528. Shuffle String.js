// https://leetcode.com/problems/shuffle-string

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  let result = new Array(s.length).fill(null);
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s.charAt(i);
  }

  return result.join("");
}