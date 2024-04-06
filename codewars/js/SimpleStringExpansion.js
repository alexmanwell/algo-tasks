// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5

const isLetter = (s) => {
  return /[a-z]/.test(s);
};

const isNumber = (s) => {
  return /[0-9]/.test(s);
};

const hasOpenBracket = (arr, from) => {
  return arr.indexOf("(", from) !== -1;
};

const findLastCloseBracket = (arr) => {
  return arr.lastIndexOf(")");
};

const buildExpansionString = (arr) => {
  let sb = ""
  for (let i = 0; i < arr.length - 1; i++) {
    const [expr1,] = arr[i];
    const [, multiple2] = arr[i + 1];
    sb = (expr1 + sb).repeat(multiple2);
  }

  return arr[arr.length - 1][0] + sb;
}

const solve = (str) => {
  let stack = [str];
  let parts = [];
  while (stack.length) {
    const expr = stack.pop();
    let index = 0;
    while (index < expr.length) {
      let letters = "";
      let multiple = "";
      while (expr[index] && isLetter(expr[index])) {
        letters += expr[index];
        index++;
      }
      while (isNumber(expr[index])) {
        multiple += expr[index];
        index++;
      }
      if (hasOpenBracket(expr, index)) {
        const endBrackets = findLastCloseBracket(expr);
        stack.push(expr.slice(index + 1, endBrackets));
        index = endBrackets + 1;
      }
      parts.unshift([
        letters,
        multiple.length ? +multiple : 1
      ]);
    }
  }

  return buildExpansionString(parts);
};