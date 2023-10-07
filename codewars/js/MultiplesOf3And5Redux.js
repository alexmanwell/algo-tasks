// https://www.codewars.com/kata/54bb6ee72c4715684d0008f9

const THREE = 3;
const FIVE = 5;

const sumSequence = (first, d, amount) => {
  return (2 * first + d * (amount - 1)) / 2 * amount;
};

const solution = (num) => {
  num -= 1;
  return sumSequence(THREE, THREE, parseInt(num / THREE))
    + sumSequence(FIVE, FIVE, parseInt(num / FIVE))
    - sumSequence(THREE * FIVE, THREE * FIVE, parseInt(num / (THREE * FIVE)));
};