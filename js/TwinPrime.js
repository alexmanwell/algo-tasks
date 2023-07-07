// https://www.codewars.com/kata/596549c7743cf369b900021b

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
};

const isTwinPrime = (n) => {
  if (!isPrime(n)) {
    return false;
  }

  return isPrime(n - 2) || isPrime(n + 2);
};