// https://www.codewars.com/kata/5613d06cee1e7da6d5000055

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const step = (step, start, end) => {
  start = start % 2 === 0 ? start + 1 : start;
  let candidate = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i) && isPrime(i + step)) {
      candidate = i;
      break;
    }
  }

  return candidate
    ? [candidate, candidate + step]
    : null;
};