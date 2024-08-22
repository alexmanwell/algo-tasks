// https://leetcode.com/problems/make-the-string-great

/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (result) {
      const diff = Math.abs(result.charCodeAt(result.length - 1) - current.charCodeAt(0));

      if (diff === 32) {
        result = result.substring(0, result.length - 1);
        continue;
      }
    }
    result += current;
  }

  return result;
};