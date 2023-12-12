// https://www.codewars.com/kata/58af1bb7ac7e31b192000020

const sum = (arr) => {
  return arr.reduce((acc, v) => acc + v, 0);
};

const findSummands = (n) => {
  const step = 2;
  if (n === 1) {
    return [1];
  }
  let a = n % 2 === 0 ? n * n - (n - 1) : n * n - (n - 1);

  let result = new Array(n);
  let index = 0;
  while (index < n) {
    result[index] = a;
    a += step;
    index++;
  }

  return result;
};