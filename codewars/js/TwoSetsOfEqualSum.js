// https://www.codewars.com/kata/647518391e258e80eedf6e06
// TODO: done this problem. But it doesn't pass time limit.

const createTwoSetsOfEqualSum = (n) => {
  const numbers = new Array(n).fill(1).map((v, i) => v + i);
  const sumArithmeticProgression = numbers.reduce((acc, v) => acc + v, 0);

  if (sumArithmeticProgression % 2 !== 0) {
    return [];
  }

  let half = sumArithmeticProgression / 2;
  let count = n;
  if (half === count) {
    return [[half], numbers.slice(0, half - 1)];
  }

  let first = [];
  let second = [];
  while (half > 0) {
    half -= count;
    first.push(count);
    if (numbers.includes(half) && !first.includes(half)) {
      first.push(half);
      second = [
        ...numbers.slice(0, half - 1),
        ...numbers.slice(half, count - 1)
      ];
      break;
    }
    count--;
  }

  return [
    first,
    second
  ];
};