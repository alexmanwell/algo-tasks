// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
  const code = "a".charCodeAt(0) - 1;
  const charCodes = [];
  for (let char of s) {
    charCodes.push(char.charCodeAt(0) - code);
  }

  let numbers = charCodes.join("");
  for (let i = 0; i < k; i++) {
    let sum = 0;
    for (let num of numbers) {
      sum += parseInt(num);
    }
    numbers = sum.toString();
  }

  return parseInt(numbers);
};