// https://leetcode.com/problems/check-if-n-and-its-double-exist

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
        return true;
      }
    }
  }

  return false;
};