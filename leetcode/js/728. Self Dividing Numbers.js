// https://leetcode.com/problems/self-dividing-numbers/description/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let i = left; i <= right; i++) {
    let number = i;
    let digits = [];
    while (number > 0) {
      const digit = number % 10;
      if (i % digit === 0) {
        digits.push(digit);
      } else {
        digits = [];
        break;
      }

      number = Math.floor(number / 10);
    }
    if (digits.length) {
      result.push(...digits.reverse().join("").split(" ").map((elem) => parseInt(elem)));
    }
  }

  return result;
};

console.log(selfDividingNumbers(47, 85));

