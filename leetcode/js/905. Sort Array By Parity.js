// https://leetcode.com/problems/sort-array-by-parity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  return [
    ...nums.filter(n => n % 2 === 0),
    ...nums.filter(n => n % 2 !== 0)
  ];
};