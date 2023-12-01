// https://www.codewars.com/kata/5b162ed4c8c47ea2f5000023

const findNextNumber = (arr) => {
  let candidate = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] !== 9) {
      arr[i] = 9;
      arr[i - 1] = arr[i - 1] - 1
    }
    if (candidate.reduce((acc, v) => acc + v, 0) !== arr.reduce((acc, v) => acc + v, 0)) {
      candidate = [...arr];
    }
  }

  return candidate;
};

const solve = (n) => {
  const digits = n.toString().split("").map(Number);
  const sumDigits = digits.reduce((acc, v) => acc + v, 0);
  const candidateDigits = findNextNumber([...digits]);
  const sumCandidateDigits = candidateDigits.reduce((acc, v) => acc + v, 0);
  if (sumDigits === sumCandidateDigits) {
    return Math.max(+digits.join(""), +candidateDigits.join(""));
  }

  return sumDigits > sumCandidateDigits ? +digits.join("") : +candidateDigits.join("");
};