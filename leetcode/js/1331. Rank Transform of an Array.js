// https://leetcode.com/problems/rank-transform-of-an-array
// TODO: doesn't pass time limit tests.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  let ranks = new Array(arr.length).fill(null);
  ranks[arr.indexOf(sorted[0])] = 1;
  for (let i = 1; i < sorted.length; i++) {
    const index = arr.indexOf(sorted[i]);
    if (sorted[i - 1] < sorted[i]) {
      ranks[index] = ranks[arr.indexOf(sorted[i - 1])] + 1;
    }
    let j = arr.indexOf(sorted[i], index + 1);
    while (j !== -1) {
      ranks[j] = ranks[index];
      j = arr.indexOf(sorted[i], j + 1)
    }
  }

  return ranks;
};