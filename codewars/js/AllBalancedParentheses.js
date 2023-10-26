// https://www.codewars.com/kata/5426d7a2c2c7784365000783
// Solve this task. It doesn't pass time tests.

const BRACKETS = {
  OPEN: "(",
  CLOSE: ")"
};

const generateParentheses = (n) => {
  return [...new Array(n).fill(BRACKETS.OPEN), ...new Array(n).fill(BRACKETS.CLOSE)].join("");
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
};

const isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current === BRACKETS.OPEN) {
      stack.push(current);
    } else if (stack[stack.length - 1] !== BRACKETS.CLOSE) {
      stack.pop();
    } else {
      break;
    }
  }

  return stack.length === 0;
};

const isUnique = (arr, candidate) => {
  return !arr.includes(candidate);
};

const balancedParens = (n) => {
  const parentheses = generateParentheses(n);
  const stack = [parentheses];
  const result = [parentheses];
  while (stack.length) {
    const brackets = stack.pop();
    for (let i = 0; i < brackets.length - 1; i++) {
      if (brackets[i] === BRACKETS.OPEN
        && brackets[i + 1] === BRACKETS.CLOSE) {
        const candidate = swap([...brackets], i, i + 1);
        if (isValid(candidate) && isUnique(result, candidate)) {
          result.push(candidate);
          stack.push(candidate);
        }
      }
    }
  }

  return result;
};