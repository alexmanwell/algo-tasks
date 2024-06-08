// https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number|null}
 */
const majorityElement = (nums) => {
  let count = 0;
  let candidate = null;
  for (const n of nums) {
    if (count === 0) {
      candidate = n;
      ++count;
    } else {
      count += candidate === n ? 1 : -1;
    }
  }

  return candidate;
};