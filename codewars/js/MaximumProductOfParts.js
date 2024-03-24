// https://www.codewars.com/kata/5a3a95c2e1ce0efe2c0001b0

const maximumProductOfParts = (number) => {
  const arr = [...number.toString()];
  let combinations = [];
  let current = 1;
  let next = current;
  while (current < arr.length - 2) {
    if (next === arr.length - current) {
      current++;
      next = 1;
    }
    combinations.push([
      arr.slice(0, current),
      arr.slice(current, current + next),
      arr.slice(current + next)
    ]);
    next++;
  }

  return Math.max(
    ...combinations
      .map(arrays => arrays.map(arr => arr.join("")))
      .map(arr => arr.reduce((acc, n) => acc * (+n), 1))
  );
};