// https://leetcode.com/problems/prime-in-diagonal

const isPrime = (n) => {
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

/**
 * @param {number[][]} nums
 * @return {number}
 */
const diagonalPrime = (nums) => {
  const size = nums.length;
  let candidates = [];
  for (let row = 0; row < size; row++) {
    candidates.push(nums[row][row]);
    candidates.push(nums[row][size - 1 - row]);
  }

  return Math.max(...candidates.filter(isPrime), 0);
};