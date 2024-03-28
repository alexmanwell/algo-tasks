// https://www.codewars.com/kata/61a2fcac3411ca0027e71108
// TODO: don't pass large range tests.

const sumRange = (arr, from, to = arr.length) => {
  let result = 0;
  for (let i = from; i < to; i++) {
    result += arr[i];
  }

  return result;
};

const maxSumPath = (arr1, arr2) => {
  let commons = [];
  for (let item of arr1) {
    if (arr2.includes(item)) {
      commons.push(item);
    }
  }
  let result = 0;
  if (commons.length) {
    result = Math.max(
      sumRange(arr1, 0, arr1.indexOf(commons[0])),
      sumRange(arr2, 0, arr2.indexOf(commons[0]))
    ) || 0;
    for (let i = 0; i < commons.length - 1; i++) {
      result += Math.max(
        sumRange(arr1, arr1.indexOf(commons[i]), arr1.indexOf(commons[i + 1])),
        sumRange(arr2, arr2.indexOf(commons[i]), arr2.indexOf(commons[i + 1])),
      );
    }
    result += Math.max(
      sumRange(arr1, arr1.indexOf(commons[commons.length - 1])),
      sumRange(arr2, arr2.indexOf(commons[commons.length - 1])),
    );
  }

  return !result
    ? arr1.reduce((acc, n) => acc + n, 0) + arr2.reduce((acc, n) => acc + n, 0)
    : result;
};