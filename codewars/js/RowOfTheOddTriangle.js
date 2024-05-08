// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

const oddRow = (n) => {
  let result = new Array(n).fill(0);
  for (let i = 0; i < result.length; i++) {
    result[i] = n * (n - 1) + 1 + 2 * i;
  }

  return result;
};