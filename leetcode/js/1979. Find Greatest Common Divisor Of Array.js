// https://leetcode.com/problems/find-greatest-common-divisor-of-array

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = (nums) => {
  const sorted = [...nums].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  let result = 0;
  for (let i = 1; i <= max; i++) {
    if (min % i === 0 && max % i === 0) {
      result = i;
    }
  }

  return result;
};