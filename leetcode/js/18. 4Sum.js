// https://leetcode.com/problems/4sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const size = nums.length;
  if (size < 4) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < size - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < size - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let start = j + 1;
      let end = size - 1;
      while (start < end) {
        const sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum < target) {
          ++start;
        } else if (sum > target) {
          --end;
        } else {
          result.push([nums[i], nums[j], nums[start], nums[end]]);
          ++start;
          --end;
          while (start < end && nums[start] === nums[start - 1]) {
            ++start;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            --end;
          }
        }
      }
    }
  }

  return result;
};