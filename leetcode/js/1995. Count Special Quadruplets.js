// https://leetcode.com/problems/count-special-quadruplets

/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum > 100) {
          continue;
        }
        for (let t = nums.length - 1; t > k; t--) {
          if (nums[t] === sum) {
            ++count;
          }
        }
      }
    }
  }

  return count;
};