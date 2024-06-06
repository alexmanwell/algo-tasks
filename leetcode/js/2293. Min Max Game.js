// https://leetcode.com/problems/min-max-game

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = (nums) => {
  while (nums.length > 1) {
    let result = new Array(Math.ceil(nums.length / 2)).fill(0);
    let index = 0;
    for (let i = 0; i < result.length; i++) {
      const a = nums[2 * i];
      const b = nums[2 * i + 1];
      result[index] = i % 2 === 0 ? Math.min(a, b) : Math.max(a, b);
      index++;
    }
    nums = result;
  }

  return nums[0];
};