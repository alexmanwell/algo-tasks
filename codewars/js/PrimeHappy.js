// https://www.codewars.com/kata/59b2ae6b1b5ca3ca240000c1

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const getPrimes = (n) => {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const sum = (arr) => {
  return arr.reduce((acc, v) => acc + v, 0);
};

const hasDivisor = (arr, n) => {
  let isDivisor = false;
  for (let item of arr) {
    if (n % item === 0) {
      isDivisor = true;
      break;
    }
  }

  return isDivisor;
};

const isPrimeHappy = (n) => {
  const primes = getPrimes(n);
  const sumOfPrimes =  primes.length > 1 ? sum(primes) : -1;

  return sumOfPrimes % n === 0 && hasDivisor(primes, n);
};