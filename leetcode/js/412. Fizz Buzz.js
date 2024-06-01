// https://leetcode.com/problems/fizz-buzz

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let results = new Array(n);
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      results[i] = "FizzBuzz";
    } else if ((i + 1) % 3 === 0) {
      results[i] = "Fizz";
    } else if ((i + 1) % 5 === 0) {
      results[i] = "Buzz";
    } else {
      results[i] = String(i + 1);
    }
  }

  return results;
};