// https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2

const DIVISORS = {
  "Fizz": 3,
  "Buzz": 5,
  "FizzBuzz": 15,
};

const findMinItem = (arr) => {
  let min = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(+arr[i])) {
      min = arr[i];
      index = i;
      break;
    }
  }

  return min - index;
};

const reverseFizzBuzz = (s) => {
  const arr = s.split(" ").map(item => {
    return Number.isNaN(+item) ? item : +item
  });
  let result = [];
  let min = findMinItem(arr);
  if (arr.every(item => Number.isNaN(+item))) {
    for (let i = 3; i < Infinity; i++) {
      let index = 0;
      let candidate = i;
      while (candidate % DIVISORS[arr[index]] === 0 && index < arr.length) {
        candidate++;
        index++;
      }
      if (arr.length === candidate - i) {
        for (let j = i; j < candidate; j++) {
          result.push(j);
        }
        break;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (Object.keys(DIVISORS).includes(arr[i])) {
        const candidate = result[result.length - 1] + 1;
        if (!result.length) {
          result.push(min);
        } else {
          const divisor = DIVISORS[arr[i]];
          if (candidate % divisor === 0) {
            result.push(candidate);
          }
        }
      } else {
        result.push(arr[i]);
      }
    }
  }

  return result;
};