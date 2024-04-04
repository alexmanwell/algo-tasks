// https://www.codewars.com/kata/5a941f3a4a6b34edf900006f

const solve = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let minSum = 1;
  for (const item of arr) {
    if (item <= minSum) {
      minSum += item;
    } else {
      break;
    }
  }

  return minSum;
};