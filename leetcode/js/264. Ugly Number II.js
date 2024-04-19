// https://leetcode.com/problems/ugly-number-ii

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
  const primes = [2, 3, 5];
  let factors = [0, 0, 0];
  let primeFactors = [1];
  while (primeFactors.length < n) {
    let candidates = new Array(primes.length).fill(null);
    for (let i = 0; i < primes.length; i++) {
      candidates[i] = primeFactors[factors[i]] * primes[i];
    }
    const min = Math.min(...candidates);
    if (min === candidates[0]) {
      factors[0]++;
    }
    if (min === candidates[1]) {
      factors[1]++;
    }
    if (min === candidates[2]) {
      factors[2]++;
    }
    primeFactors.push(min);
  }

  return primeFactors[primeFactors.length - 1];
};