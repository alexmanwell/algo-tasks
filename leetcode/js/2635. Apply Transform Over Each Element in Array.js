// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  return arr.map((elem, index) => fn(elem, index));
};