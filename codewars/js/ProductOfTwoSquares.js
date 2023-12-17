// https://www.codewars.com/kata/558298453b0435384e000101

const sqrt = (a, b) => {
  return Math.sqrt(a / (b * b));
};

const isInt = (a) => {
  return Number.isInteger(a);
};

const squareProduct = (number) => {
  const max = sqrt(number, 1);
  if (!isInt(max)) {
    return [];
  }

  let result = [];
  let a = 1;
  while (a <= max / 2 + 1) {
    const b = sqrt(number, a);
    if (isInt(b) && a <= b) {
      result.push([a, b]);
    }
    a++;
  }

  return result;
};