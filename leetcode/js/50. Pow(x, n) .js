// https://leetcode.com/problems/powx-n/description/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }

  if (x === 1) {
    return 1;
  }
  if (x === -1) {
    return (n % 2 === 0) ? 1 : -1;
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

// Second solution

const myPow = (x, n) => {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  let result = (pow % 2 === 0) ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};

console.log(myPow(-2, -19));