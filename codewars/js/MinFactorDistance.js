// https://www.codewars.com/kata/59b8614a5227dd64dc000008

const multiples = (n) => {
  const result = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.add(i).add( n / i);
    }
  }

  return [...result].sort((a, b) => a - b);
};

const findDifferenceNumbers = (arr) => {
  let result = new Array(arr.length - 1).fill(null);
  for (let i = 0; i < result.length; i++) {
    result[i] = arr[i + 1] - arr[i];
  }

  return result;
};

const minDistance = (n) => {
  return Math.min(...findDifferenceNumbers(multiples(n)));
};