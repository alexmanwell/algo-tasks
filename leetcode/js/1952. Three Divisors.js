// https://leetcode.com/problems/three-divisors

const isPrime = (n) => {
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
}

/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = (n) => {
  if (isPrime(n)) {
    return false;
  }
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length === 3;
};