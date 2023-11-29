// https://www.codewars.com/kata/5a9078e24a6b340b340000b8

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const solve = (n) => {
  let diff = 0;
  let result = -1;
  while (diff < Math.sqrt(n)) {
    let candidate = n - diff;
    if (isPrime(candidate)) {
      result = candidate;
      break;
    }
    candidate = n + diff;
    if (isPrime(candidate)) {
      result = candidate;
      break;
    }
    diff++;
  }

  return result;
};