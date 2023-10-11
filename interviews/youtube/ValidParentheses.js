// 20. Valid Parentheses
// https://www.youtube.com/watch?v=C6CbIReHsNk
// leetcode link: https://leetcode.com/problems/valid-parentheses

const OPEN_PARENTHESES = ["(", "{", "["];
const CLOSE_PARENTHESES = [")", "}", "]"];

Array.prototype.lookup = function () {
  return this[this.length - 1];
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

const findIndex = (arr, item) => {
  return arr.indexOf(item);
};

const validParentheses = (str) => {
  const brackets = str.split("");
  const stack = [];
  for (let bracket of brackets) {
    if (findIndex(OPEN_PARENTHESES, bracket) >= 0) {
      stack.push(bracket);
    } else if (findIndex(CLOSE_PARENTHESES, bracket) >= 0) {
      if (findIndex(CLOSE_PARENTHESES, bracket) === findIndex(OPEN_PARENTHESES, stack.lookup())) {
        stack.pop();
      } else {
        stack.push(bracket);
        break;
      }
    } else {
      throw new Error(`Invalid input string ${str}`);
    }
  }

  return stack.isEmpty();
};