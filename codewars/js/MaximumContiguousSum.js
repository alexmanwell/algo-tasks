// https://www.codewars.com/kata/52f4261c95d6bff39a003096

const maxContiguousSum = (arr) => {
  let max = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(0, max + arr[i]);
    result = Math.max(result, max);
  }

  return result;
};