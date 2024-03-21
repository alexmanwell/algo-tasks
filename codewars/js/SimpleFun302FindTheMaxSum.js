// https://www.codewars.com/kata/59252121fb1f93fc8200013a

const modTwo = (a, b) => {
  return (a + b) % 2 === 0;
};

const modThree = (a, b) => {
  return (a + b) % 3 === 0;
};

const modFive = (a, b, c) => {
  return (a + b + c) % 5 === 0;
};

const generateCombinations = (n) => {
  let result = [];
  let count = 0;
  while (count < 2) {
    let arr = [n - count, n - 1 - count, n - 2 - count];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
    count++;
  }

  return result;
};

const findMaxSum = (n) => {
  let result = [];
  const combinations = generateCombinations(n);
  for (const arr of combinations) {
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
    if (modTwo(a, b)
      && modThree(b, c)
      && modFive(a, b, c)
    ) {
      result = arr;
      break;
    }
  }

  return result.reduce((acc, v) => acc + v, 0);
};

// Best solution:
const findMaxSum = (n) => {
  for (let i = n, j, k; i > 1; i--) {
    j = n - (n + i) % 2;
    k = n - (n + i + j) % 5;
    if ((j + k) % 3 === 0) {
      return i + j + k;
    }
  }

  return 0;
};