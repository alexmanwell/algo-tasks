// https://leetcode.com/problems/majority-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  let map = new Map();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let result = [];
  for (let [num, amount] of map.entries()) {
    if (amount > nums.length / 3) {
      result.push(num);
    }
  }

  return result;
};