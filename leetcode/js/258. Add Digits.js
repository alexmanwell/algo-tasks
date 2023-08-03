// https://leetcode.com/problems/add-digits/description/

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  while (num > 9) {
    const digits = Array.from(String(num), Number);
    let sum = 0;
    for (let digit of digits) {
      sum += digit;
    }
    num = sum;
  }

  return num;
};