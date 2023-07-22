// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length % 2 === 1) {
    return false;
  }

  const opened = ["(", "{", "["];
  const closed = [")", "}", "]"];
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const openIndex = opened.findIndex((elem) => elem === current);
    if (openIndex !== -1) {
      stack.push(openIndex);
    } else {
      const closeIndex = closed.findIndex((elem) => elem === current);
      if (stack[stack.length - 1] === closeIndex) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};