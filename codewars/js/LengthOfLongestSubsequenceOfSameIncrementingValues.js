// https://www.codewars.com/kata/5496033fbecf8ad838000336

//Find the length of longest subsequence of same incrementing values
const longestSequenceIn = (str) => {
  const arr = str.split(" ");
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let max = 0;
    let diff = arr[i + 1] - arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] - arr[j] === diff) {
        max++;
      } else {
        break
      }
    }
    if (max > result) {
      result = max;
    }
  }

  return str.length ?
    result
      ? result + 1
      : 1
    : 0;
};