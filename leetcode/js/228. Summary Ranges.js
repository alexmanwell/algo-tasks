// https://leetcode.com/problems/summary-ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  let ranges = [];
  let index = 0;
  let start = nums[index];
  while (index < nums.length) {
    const end = nums[index];
    if (end !== nums[index + 1] - 1) {
      ranges.push(start !== end ? `${start}->${end}` : `${start}`);
      start = nums[index + 1];
    }
    ++index;
  }

  return ranges;
};