// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = (arr, arr2) => {
  const length = arr.length;
  let result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = (arr2[i] - arr[i]) ** 2;
  }

  return result
    .reduce((acc, v) =>
      acc + v, 0
    ) / length;
};