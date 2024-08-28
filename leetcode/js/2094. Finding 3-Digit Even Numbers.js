// https://leetcode.com/problems/finding-3-digit-even-numbers

const isMatchDigits = (targetDigits, candidateDigits) => {
  for (let i = 0; i < 10; i++) {
    if (candidateDigits[i] > targetDigits[i]) {
      return false;
    }
  }

  return true;
};

const countDigits = (arr) => {
  return arr.reduce((result, d) => {
      ++result[d];
      return result;
    },
    new Array(10).fill(0)
  );
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = (digits) => {
  let result = [];
  const targetCountDigits = countDigits(digits);
  for (let i = 100; i < 1000; i += 2) {
    const candidateCountDigits = countDigits(i.toString().split("").map(Number));
    if (isMatchDigits(targetCountDigits, candidateCountDigits)) {
      result.push(i);
    }
  }

  return result;
};