// https://leetcode.com/problems/second-largest-digit-in-a-string

/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = (s) => {
  let firstHighest = -1;
  let secondHighest = -1;
  for (const c of s) {
    if (c >= '0' && c <= '9') {
      const digit = c.charCodeAt(0) - '0'.charCodeAt(0);
      if (firstHighest < digit) {
        secondHighest = firstHighest;
        firstHighest = digit;
      } else if (firstHighest !== digit && secondHighest < digit) {
        secondHighest = digit;
      }
    }
  }

  return secondHighest;
};