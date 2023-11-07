// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const primes = (n) => {
  let primes = new Array(n);
  let index = 0;
  const length = Number.MAX_SAFE_INTEGER;
  for (let k = 2; k < length && index < n; k++) {
    if (isPrime(k)) {
      primes[index] = k;
      index++;
    }
  }

  return primes;
};

const numPrimorial = (n) => {
  return primes(n).reduce((acc, item) => acc * item, 1);
};