// https://www.codewars.com/kata/59aa6567485a4d03ff0000ca

const isPrime = (number) => {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const primeNumbers = (a, b) => {
  const primes = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const isEndsWithOne = (number) => {
  let isOne = false;
  for (let i = 0; i < 20; i++) {
    number = number
      .toString()
      .split("")
      .map(Number)
      .map(num => Math.pow(num, 2))
      .reduce((acc, num) => acc + num, 0);

    if (number === 1) {
      isOne = true;
      break;
    }
  }

  return isOne;
};

const solve = (a, b) => {
  return primeNumbers(a, b).filter(prime => isEndsWithOne(prime)).length;
};