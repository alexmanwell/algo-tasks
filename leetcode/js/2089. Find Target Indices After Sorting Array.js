// https://leetcode.com/problems/find-target-indices-after-sorting-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
  let smaller = 0;
  let equal = 0;
  for (let item of nums) {
    if (item < target) {
      smaller++;
    } else {
      if (item === target) {
        equal++;
      }
    }
  }
  let result = [];
  for (let i = smaller; i < smaller + equal; i++) {
    result.push(i);
  }

  return result;
};