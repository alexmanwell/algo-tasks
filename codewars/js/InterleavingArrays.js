// https://www.codewars.com/kata/523d2e964680d1f749000135

const lengths = (arrays) => {
  return arrays.map(arr => arr.length);
};

const interleave = (...items) => {
  const max = Math.max(...lengths(items));
  const size = items.length;
  let result = new Array(size * max);
  for (let i = 0; i < max; i++) {
    let index = size * i;
    for (let item of items) {
      result[index] = item[i] !== undefined ? item[i] : null;
      index++;
    }
  }

  return result;
};