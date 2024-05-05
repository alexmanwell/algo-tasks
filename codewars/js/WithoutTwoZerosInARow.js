// https://www.codewars.com/kata/65cf8417e2b49c2ecd3c3aee
// This task is a light problem by dynamic programming.

const zeros = (n) => {
  let result = [1n, 2n];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result[result.length - 1];
};