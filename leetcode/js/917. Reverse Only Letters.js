// https://leetcode.com/problems/reverse-only-letters

const splitOnlyLetters = (s) => {
  return s
    .split(new RegExp(/[^a-zA-Z]/))
    .join("")
    .split("");
}

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
  const reverseLetters = splitOnlyLetters(s).reverse();
  let result = new Array(s.length).fill("");
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      result[i] = reverseLetters[index];
      ++index;
    } else {
      result[i] = s[i];
    }
  }

  return result.join("");
};