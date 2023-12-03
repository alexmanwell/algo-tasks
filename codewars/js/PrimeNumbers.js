// https://www.codewars.com/kata/52dd72494367608ac1000416

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number >= 2;
};

const getPrimes = (start, finish) => {
  [start, finish] = [
    start < finish ? start : finish,
    start > finish ? start : finish
  ];
  let primes = [];
  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};