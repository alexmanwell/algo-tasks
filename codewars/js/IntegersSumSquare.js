// https://www.codewars.com/kata/588b7765beb7a6fa19000008

const sumOfDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, v) => acc + v, 0);
};

const intSumSq = (n, m) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    if (sumOfDigits(i) === Math.sqrt(m)) {
      result.push(i)
    }
  }

  return result.length ? result : "No result";
};