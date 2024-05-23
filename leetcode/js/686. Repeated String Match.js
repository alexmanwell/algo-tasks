// https://leetcode.com/problems/repeated-string-match

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const repeatedStringMatch = (a, b) => {
  const uniquesA = new Set(a);
  const uniquesB = new Set(b);
  for (let letter of uniquesB) {
    if (!uniquesA.has(letter)) {
      return -1;
    }
  }
  let count = Math.floor(b.length / a.length);
  count = count === 0 ? 1 : count;
  let letters = a.repeat(count - 1);
  if (a.length < b.length) {
    while (true) {
      letters = letters + a;
      const index = letters.indexOf(b);
      if (index !== -1) {
        break;
      }
      if (letters.length > 2 * b.length) {
        const index = letters.indexOf(b);
        if (index === -1) {
          count = -1;
          break;
        }
      }
      ++count;
    }
  } else {
    const index = a.indexOf(b);
    if (index === -1) {
      a = a.repeat(++count);
      const index = a.indexOf(b);
      if (index === -1) {
        count = -1;
      }
    }
  }

  return count;
};