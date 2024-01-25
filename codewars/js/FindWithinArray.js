// https://www.codewars.com/kata/51f082ba7297b8f07f000001

const findInArray = (arr, iterator) => {
  for (let i = 0; i < arr.length; i++) {
    if (iterator(arr[i], i)) {
      return i;
    }
  }

  return -1;
};

const trueIfEven = (v) => {
  return v % 2 === 0;
};

const neverTrue = () => {
  return false;
};

const trueIfValueEqualsIndex = (v, i) => {
  return v === i;
};

const trueIfLengthEqualsIndex = (v, i) => {
  return v.length === i;
};