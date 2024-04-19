// https://leetcode.com/problems/count-primes

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let isPrimes = new Array(n).fill(true);
  for (let i = 2; i * i < n; ++i) {
    if (isPrimes[i]) {
      for (let j = i; j * i < n; ++j) {
        isPrimes[i * j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < isPrimes.length; i++) {
    if (isPrimes[i]) {
      count++;
    }
  }

  return count;
};