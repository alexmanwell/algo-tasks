// https://leetcode.com/problems/rank-transform-of-an-array

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? [...map.get(arr[i]), i] : [i]);
  }
  const sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => k1 - k2);
  let ranks = new Array(arr.length).fill(null);
  for (let i = 0; i < sorted.length; i++) {
    for (let index of sorted[i][1]) {
      ranks[index] = i + 1;
    }
  }

  return ranks;
};