// https://leetcode.com/problems/ugly-number/description/

/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = (num) => {
  let primes = [2, 3, 5];
  let factors = [0, 0, 0];
  let index = 0;
  while (num > 1 && index < primes.length) {
    while (num % primes[index] === 0) {
      factors[index]++;
      num /= primes[index];
    }
    if (num % primes[index] !== 0) {
      index++;
    }
  }

  return num === 1;
};