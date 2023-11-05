// https://www.codewars.com/kata/59c0cd4f46038781010000ac

const max = (...items) => {
  items = items.flat(Number.MAX_SAFE_INTEGER).map(Number);
  if (!items.length) {
    return 0;
  }
  if (items.includes(NaN)) {
    return NaN;
  }

  return items.reduce((acc, item) => item > acc ? item : acc);
};

const min = (...items) => {
  items = items.flat(Number.MAX_SAFE_INTEGER).map(Number);
  if (!items.length) {
    return 0;
  }
  if (items.includes(NaN)) {
    return NaN;
  }

  return items.reduce((acc, item) => item < acc ? item : acc);
};
