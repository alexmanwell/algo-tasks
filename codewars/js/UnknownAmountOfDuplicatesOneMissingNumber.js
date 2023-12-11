// https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b
// TODO: Doesn't pass all tests. RangeError: Maximum call stack size exceeded.

const sumOfArithmeticSequence = (min, max, n) => {
  return n * (min + max) / 2;
};

const findDupsMiss = (arr) => {
  let map = {};
  let duplicates = {};
  let sumDuplicates = 0;
  let sumOfList = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    sumOfList += value;
    if (map[value]) {
      duplicates[value] = value;
      sumDuplicates += value;
    }
    map[value] = map[value] ? map[value] + 1 : 1;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = arr.length - Object.values(duplicates).length + 1;

  return [
    sumOfArithmeticSequence(min, max, count) - (sumOfList - sumDuplicates),
    Object.values(duplicates)
  ];
};