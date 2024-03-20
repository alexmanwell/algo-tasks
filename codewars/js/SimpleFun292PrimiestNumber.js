// https://www.codewars.com/kata/591d4aeea6007e95ba0000e7

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const checkPrimes = (arr) => {
  return arr.every(n => isPrime(n));
};

const hasOneDigit = (arr) => {
  return arr.includes(1);
};

const hasZeroDigit = (arr) => {
  return arr.includes(0);
};

const primiestNumber = (k) => {
  if (k <= 0) {
    return -1;
  }
  let result = 0;
  let count = 0;
  for (let i = 2; i < Infinity; i++) {
    const digits = ("" + i).split("").map(Number);
    if (isPrime(i)
      && !hasOneDigit(digits)
      && !hasZeroDigit(digits)
      && checkPrimes(digits)
    ) {
      result = i;
      count++;
    }
    if (count === k) {
      break;
    }
  }

  return result <= 10000 ? result : -1;
};