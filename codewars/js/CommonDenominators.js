// https://www.codewars.com/kata/54d7660d2daf68c619000d95

const hasMultiple = (candidate, args) => {
  let isMultiple = true;
  for (let arg of args) {
    if (candidate % arg !== 0) {
      isMultiple = false;
      break;
    }
  }

  return isMultiple;
};

const findSmallestCommonMultiple = (args) => {
  const max = Math.max(...args);
  const multiple = args.reduce((acc, a) => acc * a, 1);
  let result = 0;
  for (let candidate = max; candidate <= multiple; candidate++) {
    if (hasMultiple(candidate, args)) {
      result = candidate;
      break;
    }
  }

  return result;
};

const convertFrac = (lst) => {
  const denominators = lst.map(([, denominator]) => denominator);
  const multiple = findSmallestCommonMultiple(denominators);

  return lst
    .map(([numerator, denominator]) => {
      return [multiple * numerator / denominator, multiple];
    })
    .reduce((acc, [numerator, denominator]) => {
      return `${acc}` + `(${numerator},${denominator})`;
    }, "");
};