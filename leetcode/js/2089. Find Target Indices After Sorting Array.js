// https://leetcode.com/problems/find-target-indices-after-sorting-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
  const sorted = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length;
  let result = [];
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    if (sorted[middle] === target) {
      result.unshift(middle);
      let candidate = middle;
      if (sorted[candidate + 1] === target) {
        while (candidate + 1 < sorted.length && sorted[candidate + 1] === target) {
          candidate++;
          result.push(candidate);
        }
      }
      candidate = middle;
      if (sorted[candidate - 1] === target) {
        while (candidate - 1 >= 0 && sorted[candidate - 1] === target) {
          candidate--;
          result.unshift(candidate);
        }
      }
      break;
    }
    if (sorted[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return result;
};