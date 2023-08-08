// https://leetcode.com/problems/flatten-deeply-nested-array/description/

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = (arr, depth) => {
  if (depth === 0) {
    return arr;
  }

  let temp = [];
  let count = 0;
  while (depth !== 0) {
    temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        temp.push(...arr[i]);
      } else {
        temp.push(arr[i]);
        count++;
      }
    }
    arr = temp;
    if (count === temp.length) {
      break;
    }
    depth--;
    count = 0;
  }

  return arr;
};