// https://leetcode.com/problems/perfect-number/description/

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  const numbers = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      numbers.push(i);
    }
  }

  return numbers.reduce((acc, number) => acc + number, 0) === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(12));