// https://leetcode.com/problems/nested-array-generator/

/**
 * @param {Array} arr
 * @return {Generator}
 */
const inorderTraversal = function*(arr) {
  arr = arr.flat(Infinity);
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
};