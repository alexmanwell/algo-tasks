// https://leetcode.com/problems/intersection-of-multiple-arrays/description/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = (nums) => {
  const map = new Map();
  for (let elements of nums) {
    for (let element of elements) {
      const value = map.has(element) ? map.get(element) : 0;
      map.set(element, value + 1);
    }
  }

  const result = [];
  const length = nums.length;
  for (let [key, value] of map.entries()) {
    if (value === length) {
      result.push(key);
    }
  }

  return result.sort((a, b) => a - b);
};