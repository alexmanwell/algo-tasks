// https://leetcode.com/problems/rank-transform-of-an-array

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || sorted[i] !== sorted[i - 1]) {
      sorted[max++] = sorted[i];
    }
  }
  const binary = (sorted, right, item) => {
    let left = 0;
    while (left < right) {
      const middle = (left + right) >> 1;
      if (sorted[middle] > item) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }

    return left;
  };
  let ranks = [];
  for (let i = 0; i < arr.length; i++) {
    ranks.push(binary(sorted, max, arr[i]));
  }

  return ranks;
};