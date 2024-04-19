// https://leetcode.com/problems/ugly-number-ii
// TODO: doesn't pass time limit tests.

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
  const primes = [2, 3, 5];
  let count = 0;
  let candidate = 0;
  while (count < n) {
    let temp = ++candidate;
    let index = 0;
    while (temp > 1 && index < primes.length) {
      if (temp % primes[index] !== 0) {
        index++;
      }
      while (temp % primes[index] === 0) {
        temp /= primes[index];
      }
    }
    if (temp === 1) {
      count++;
    }
  }

  return candidate;
};