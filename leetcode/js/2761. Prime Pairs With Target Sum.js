// https://leetcode.com/problems/prime-pairs-with-target-sum

/**
 * @param {number} n
 * @return {number[][]}
 */
const findPrimePairs = (n) => {
  let primes = new Array(n).fill(true);
  let candidates = [];
  for (let i = 2; i <= n / 2; i++) {
    if (primes[i]) {
      candidates.push([i,n - i]);
      for (let j = i + i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  let result = [];
  for (const [x, y] of candidates) {
    if (primes[y]) {
      result.push([x, y]);
    }
  }

  return result;
};