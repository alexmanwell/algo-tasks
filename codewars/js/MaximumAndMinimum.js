// https://www.codewars.com/kata/59c0cd4f46038781010000ac

const findMax = (items) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let item of items) {
    if (item > max) {
      max = item;
    }
  }

  return max;
};

const findMin = (items) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let item of items) {
    if (item < min) {
      min = item;
    }
  }

  return min;
};

const thing = (fn, ...items) => {
  let result;
  items = items.flat(Number.MAX_SAFE_INTEGER).map(Number);
  if (items.length) {
    let isNumber = true;
    for (let item of items) {
      if (!/\d/.test(item)) {
        isNumber = false;
        break;
      }
    }
    if (isNumber) {
      items = items.map(Number);
      result = fn(items);
    }
  }

  return result;
};

const max = (...items) => {
  const max = thing(findMax, items);
  return items.length > 0 ? typeof max === "number" ? max : NaN : 0;
};

const min = (...items) => {
  let min = thing(findMin, items);
  return items.length > 0 ? typeof min === "number" ? min : NaN : 0;
};
