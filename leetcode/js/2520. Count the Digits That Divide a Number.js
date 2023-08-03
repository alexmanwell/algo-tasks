// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

/**
 * @param {number} num
 * @return {number}
 */
const countDigits = (num) => {
  let count = 0;
  const digits = num.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    const digit = +digits[i];
    if (num % digit === 0) {
      count++;
    }
  }

  return count;
};