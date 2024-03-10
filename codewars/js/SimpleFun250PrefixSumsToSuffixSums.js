// https://www.codewars.com/kata/590c4c342ad5cd6a8700005c

const prefixSumsToSuffixSums = (prefixes) => {
  let arr = new Array(prefixes.length).fill(0);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = prefixes[i] - prefixes[i - 1];
  }
  arr[0] = prefixes[0];
  arr.unshift(0);

  const sum = arr.reduce((acc, n) => acc + n);
  let subSum = 0;
  let suffixes = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    subSum += arr[i];
    suffixes[i] = sum - subSum;
  }
  suffixes.pop();

  return suffixes;
};