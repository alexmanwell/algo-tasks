// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = (s) => {
  let chars = s.split("");
  let stack = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(" || chars[i] === ")") {
      const size = stack.length;
      if (!size) {
        if (chars[i] === ")") {
          stack.push([i, ")"]);
        }
      } else {
        if (stack[size - 1][1] === ")" && chars[i] === ")") {
          stack.push([i, ")"]);
        } else if (stack[size - 1][1] === "(" && chars[i] === ")") {
          stack.pop();
        }

      }
      if (chars[i] === "(") {
        stack.push([i, "("])
      }
    }
  }
  for (const [i, _] of stack) {
    chars[i] = "";
  }

  return chars.join("");
};