// https://leetcode.com/problems/number-of-good-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let index = i;
    while (index !== -1) {
      const candidate = nums[i];
      index = nums.indexOf(candidate, index + 1);
      if (nums[i] === nums[index]) {
        ++count;
      }
    }
  }

  return count;
};