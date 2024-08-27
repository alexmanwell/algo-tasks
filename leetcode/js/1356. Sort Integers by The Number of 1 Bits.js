// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => {
  const countOnes = (n) => n.split("").map(Number).reduce((a, b) => a + b);
  let keys = new Array(arr.length);
  let values = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    keys[i] = arr[i];
    values[i] = countOnes(arr[i].toString(2));
  }
  let map = new Array(arr.length);
  for (let i = 0; i < map.length; i++) {
    map[i] = [keys[i], values[i]];
  }

  return map
    .sort(([k1, v1], [k2, v2]) => v1 - v2 || k1 - k2)
    .map(([k, v]) => k);
};