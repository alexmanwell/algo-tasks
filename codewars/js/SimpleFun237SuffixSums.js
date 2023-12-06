// https://www.codewars.com/kata/590938089ff3d186cb00004c

const suffixSums = (arr) => {
  let sum = arr.reduce((acc, v) => acc + v, 0);
  let result = new Array(arr.length);
  result[0] = sum;
  for (let i = 0; i < arr.length - 1; i++) {
    result[i + 1] = result[i] - arr[i];
  }

  return result;
};