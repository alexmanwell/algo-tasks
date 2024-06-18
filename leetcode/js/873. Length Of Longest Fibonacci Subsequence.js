// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence
// TODO: This solution doesn't pass time limit tests.

/**
 * @param {number[]} arr
 * @return {number}
 */
const lenLongestFibSubseq = (arr) => {
  if (arr.length < 3) {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let current = arr[i];
      let next = arr[j];
      let count = 2;
      while (arr.includes(current + next)) {
        [current, next] = [next, current + next];
        ++count;
      }
      if (max < count) {
        max = count;
      }
    }
  }

  return max < 3 ? 0 : max;
};