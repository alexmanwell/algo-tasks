// https://www.codewars.com/kata/582dcda401f9ccb4f0000025

const isPrime = (candidate) => {
  for (let i = 2; i <= Math.sqrt(candidate); i++) {
    if (candidate % i === 0) {
      return false;
    }
  }

  return true;
};

const findPrime = (arr, number) => {
  for (let value of arr) {
    for (let i = 9; i > 0; i -= 2) {
      const candidate = Number(value + i);
      if (isPrime(candidate) && candidate <= number) {
        return candidate;
      }
    }
  }

  return -1;
};

const findFirstDigit = (number) => {
  const firstDigit = +number.toString()[0];
  return firstDigit % 2 === 0
    ? firstDigit
    : (firstDigit === 1)
      ? firstDigit
      : firstDigit - 1;
};

const findSubCandidates = (number) => {
  let candidates = [];
  const digit = findFirstDigit(number);
  for (let i = digit; i > 0; i -= 2) {
    candidates.push(i.toString());
  }
  const amountDigits = number.toString().length - 1;
  let position = 0;
  while (position < amountDigits - 1) {
    let temp = [];
    for (let i = 8; i >= 0; i -= 2) {
      for (let candidate of candidates) {
        temp.push(candidate + i);
      }
    }
    candidates = [...temp];
    position++;
  }

  return candidates;
};


const f = (n) => {
  n -= 1;

  const candidates = findSubCandidates(n);
  candidates.sort((a, b) => a.localeCompare(b)).reverse();

  return findPrime(candidates, n);
};