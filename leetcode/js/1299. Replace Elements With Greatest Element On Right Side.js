// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

/**
 * @param {number[]} arr
 * @param {number} from
 * @return {[number, number]}
 */
const findMax = (arr, from) => {
  let index = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return [max, index];
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  let [max, index] = findMax(arr, 1);
  let i = 0;
  while (i < arr.length - 1) {
    if (i + 1 <= index) {
      arr[i] = max;
      i++;
    } else {
      [max, index] = findMax(arr, i + 1);
    }
  }
  arr[arr.length - 1] = -1;

  return arr;
};