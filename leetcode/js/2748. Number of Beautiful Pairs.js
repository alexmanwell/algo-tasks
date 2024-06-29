// https://leetcode.com/problems/number-of-beautiful-pairs

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

const firstDigit = n => {
  return +n.toString().substring(0, 1);
};

const lastDigit = n => {
  return n % 10;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const countBeautifulPairs = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const gcd1 = gcd(firstDigit(nums[i]), lastDigit(nums[j]));
      if (gcd1 === 1) {
        ++count;
      }
    }
  }

  return count;
};