// https://www.codewars.com/kata/5aa69e68ba1bb5ecdf000557

const longestSequence = (n) => {
  let squares = [];
  let sum = 0;
  let subSum = 0;
  const limit = Math.sqrt(n) + 3;
  for (let i = 1; i <= limit; i += 2) {
    subSum += i;
    squares.push(subSum);
    sum += subSum;
    while (sum > n) {
      sum -= squares.shift();
    }
    if (sum === n) {
      break;
    }
  }

  return sum === n ? squares.map(n => Math.sqrt(n)) : [];
};