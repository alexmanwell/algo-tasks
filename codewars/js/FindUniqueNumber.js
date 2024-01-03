// https://www.codewars.com/kata/5822d900b81f701dd40002c9

const findUnique = (arr) => {
  const findFloat = arr.filter(v => !Number.isInteger(v));
  if (findFloat.length === 1) {
    return findFloat[0];
  }
  const findInteger = arr.filter(v => Number.isInteger(v));
  if (findInteger.length === 1) {
    return findInteger[0];
  }
  const findPositive = arr.filter(v => v >= 0);
  if (findPositive.length === 1) {
    return findPositive[0];
  }
  const findNegative = arr.filter(v => v < 0);
  if (findNegative.length === 1) {
    return findNegative[0];
  }
  const findOdd = arr.filter(v => Math.abs(v) % 2 === 1);
  if (findOdd.length === 1) {
    return findOdd[0];
  }
  const findEven = arr.filter(v => Math.abs(v) % 2 === 0);
  if (findEven.length === 1) {
    return findEven[0];
  }

  return arr.find(v => arr.indexOf(v) === arr.lastIndexOf(v));
};