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

const max = (...items) => {
  let max;
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
      max = findMax(items);
    }
  }

  return items.length > 0 ? typeof max === "number" ? max : NaN : 0;
};

const min = (...items) => {
  let min;
  items = items.flat(Number.MAX_SAFE_INTEGER).map(Number);
  let isNumber = true;
  if (items.length) {
    for (let item of items) {
      if (!/\d/.test(item)) {
        isNumber = false;
      }
    }
  }

  if (isNumber) {
    items = items.map(Number);
    min = findMin(items);
  }

  return items.length > 0 ? typeof min === "number" ? min : NaN : 0;
};
