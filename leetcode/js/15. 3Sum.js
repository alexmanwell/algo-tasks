// https://leetcode.com/problems/3sum/

const compareValues = (a, b) => {
  return a - b;
};

const threeSum = (nums) => {
  if (nums.length < 3) {
    return [];
  }

  nums.sort(compareValues);

  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        while(nums[start] === nums[start + 1]) {
          start++;
        }
        while(nums[end] === nums[end + 1]) {
          start--;
        }
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  return result;
};