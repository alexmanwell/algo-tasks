// https://www.codewars.com/kata/563f0c54a22b9345bf000053

const fcn = (n) => {
  const sequence = new Array(n).fill(0);
  sequence[0] = 1;
  sequence[1] = 2;
  for (let i = 0; i < n - 1; i++) {
    sequence[i + 2] = (6 * sequence[i] * sequence[i + 1]) / (5 * sequence[i] - sequence[i + 1]);
  }

  return sequence[sequence.length - 1];
};


// another solution.
const fcn = (n) => {
  return Math.pow(2, n);
};