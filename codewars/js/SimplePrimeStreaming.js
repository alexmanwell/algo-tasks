// https://www.codewars.com/kata/5a908da30025e995880000e3

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const listOfPrimes = (a, b) => {
  let primes = "";
  for (let i = 2; i < Number.MAX_SAFE_INTEGER && primes.length <= a + b; i++) {
    if (isPrime(i)) {
      primes += i;
    }
  }

  return primes;
};

const solve = (a, b) => {
  return listOfPrimes(a, b).substring(a, a + b);
};