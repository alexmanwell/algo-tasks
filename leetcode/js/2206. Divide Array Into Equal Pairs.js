// https://leetcode.com/problems/divide-array-into-equal-pairs

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = (nums) => {
  let pairs = new Array(nums.length / 2).fill(null);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      continue;
    }
    const nextIndex = nums.indexOf(nums[i], i + 1);
    if (nextIndex === -1) {
      return false;
    }
    pairs[index] = [nums[i], nums[nextIndex]];
    nums[i] = undefined;
    nums[nextIndex] = undefined;
    ++index;
  }

  return true;
};