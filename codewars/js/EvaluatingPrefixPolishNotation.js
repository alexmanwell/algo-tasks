// https://www.codewars.com/kata/5e5b7f55c2e8ae0016f42339

const EVALUATE = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const calculate = (expression) => {
  const tokens = expression.split(" ");
  let result = [];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (new RegExp(/\d/).test(token)) {
      result.push(+token);
    } else {
      const a = result.pop();
      const b = result.pop();
      result.push(EVALUATE[token](a, b));
    }
  }

  return result.pop();
};