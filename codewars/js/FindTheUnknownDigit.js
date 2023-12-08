// https://www.codewars.com/kata/546d15cebed2e10334000ed9

const MATH_OPERATION = {
  "+": (a, b) => a + b,
  "*": (a, b) => a * b,
  "-": (a, b) => a - b
};

const digits = (numbers) => {
  let set = new Set();
  for (let number of numbers) {
    for (let digit of number) {
      if (new RegExp(/\d/).test(digit)) {
        set.add(+digit);
      }
    }
  }

  return set;
};

const compareSize = (number, candidate) => {
  return Number(number).toString().length !== candidate.length;
};

const solveExpression = (exp) => {
  exp = exp.replace("--", "+");
  const candidates = exp.match(/[-]([\d?]+)|([\d?]+)/g);
  const set = digits(candidates);
  for (let candidate of candidates) {
    exp = exp.replace(candidate, "");
  }
  const operation = exp[0] !== "=" ? exp[0] : "+";
  let value = -1;
  for (let digit = 0; digit < 10; digit++) {
    while (set.has(digit)) {
      digit++;
    }
    let numbers = new Array(candidates.length);
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].includes("?")) {
        numbers[i] = candidates[i].replaceAll("?", digit.toString());
      } else {
        numbers[i] = candidates[i];
      }
      if (Number(numbers[i]) !== 0 && compareSize(numbers[i], candidates[i])) {
        break;
      }
    }
    if (numbers.includes("00")) {
      numbers = [];
    }
    numbers = numbers.map(Number);
    let result = MATH_OPERATION[operation](numbers[0], numbers[1]);
    if (result === numbers[2]) {
      value = digit;
      break
    }
  }

  return value;
};