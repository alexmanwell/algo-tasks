// https://leetcode.com/problems/to-lower-case

/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = (s) => {
  return s
    .split(" ")
    .map(item => item.toLowerCase())
    .join(" ")
};