// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = (arr) => {
  let index = 0;
  while (index < arr.length) {
    if (index + 1 < arr.length && arr[index] === 0) {
      let j = arr.length - 2;
      while (j > index) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[index + 1] = 0;
      index++;
    }
    index++;
  }

  return arr;
};