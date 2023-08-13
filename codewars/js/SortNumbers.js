// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solution(nums) {
  if (nums === null) {
    return [];
  }

  for (let y = 0; y < nums.length; y++) {
    for (let i = 0; i < nums.length - y; i++) {
      if (nums[i] > nums[i + 1]) {
        nums = swap(nums, i);
      }
    }
  }
  
  return nums;
}

function swap(nums, i) {
  let temp = nums[i];
  nums[i] = nums[i + 1];
  nums[i + 1] = temp;

  return nums;
}