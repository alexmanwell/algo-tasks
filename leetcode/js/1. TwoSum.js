// https://leetcode.com/problems/two-sum/

const 1 = (nums, target) => {
  let indexes = [];
  let index = 0;
  indexes[0] = index;
  for (let i = index + 1; i < nums.length; i++) {
    if (nums[indexes[0]] + nums[i] === target) {
      indexes[1] = i;
      break;
    }
    if (i === nums.length - 1) {
      indexes[0] = ++index;
      i = index;
    }
  }

  return indexes;
};