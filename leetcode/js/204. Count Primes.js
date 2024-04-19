// https://leetcode.com/problems/count-primes
// TODO: This solution is perform requirements of time limit. But it doesn't good solution. I think I can find a better solution.

const isPrime = (n) => {
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
}

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  let count = 1;
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      count++;
    }
  }

  return n <= 2 ? 0 : count;
};