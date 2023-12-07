// https://www.codewars.com/kata/54eee76e7f9142f0cd001270

const sum = (n) => (1 + n) / 2 * n;

const sumOfList = (arr) => {
  return arr.reduce((acc, v) => acc + v, 0);
};

const solution = (arr) => {
  let duplicate = 0;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      duplicate = arr[i];
    }
    map[arr[i]] = true;
  }

  return [
    sum(arr.length) + duplicate - sumOfList(arr),
    duplicate
  ];
};