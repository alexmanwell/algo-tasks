// https://www.codewars.com/kata/57bf7fae3b3164dcac000352

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const primeSequence = (start) => {
  let sequence = [];
  if (isPrime(6 * start + 1)
      && isPrime(6 * (start + 3) - 1)) {
    sequence.push(6 * start + 1);
    sequence.push(6 * (start + 3) - 1);
  } else {
    return [];
  }

  for (let i = start + 1; i < start + 3; i++) {
    if (isPrime(6 * i - 1)
        && isPrime(6 * i + 1)) {
      sequence.push(6 * i - 1);
      sequence.push(6 * i + 1);
    } else {
      return [];
    }
  }

  return sequence.sort((a, b) => a - b);
};

const findPrimesSextuplet = (sumLimit) => {
  for (let i = parseInt(sumLimit / 36); i < Infinity; i++) {
    const primes = primeSequence(i);
    if (primes.reduce((acc, v) => acc + v, 0) > sumLimit) {
      return primes;
    }
  }

  return [];
};