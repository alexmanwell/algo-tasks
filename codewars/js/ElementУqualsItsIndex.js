// https://www.codewars.com/kata/5b7176768adeae9bc9000056

const getMinValue = (a, b) => {
  return Math.min(Math.max(a, b), b);
};

const indexEqualsValue = (arr) => {
  let left = 0;
  let right = arr.length;
  let result = -1;
  while (left <= right) {
    let candidate = Math.floor(left + ((right - left) / 2));
    if (arr[candidate] === candidate) {
      result = getMinValue(result, candidate);
      right = candidate;
    }
    if (arr[candidate] < candidate) {
      left = candidate + 1;
    } else {
      right = candidate - 1;
    }
  }

  return result;
};