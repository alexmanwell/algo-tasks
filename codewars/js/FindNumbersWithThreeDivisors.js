// https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32

const primes = function* () {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let n = 2;
  while (true) {
    if (isPrime(n)) {
      yield n;
    }
    n++;
  }
};

const isRange = (n, from, to) => {
  return n >= from && n <= to;
};

const solution = (n, m) => {
  let result = [];
  let numbers = primes();
  let candidate = 0;
  while (candidate <= m) {
    candidate = BigInt(numbers.next().value) ** 4n;
    if (isRange(candidate, n, m)) {
      result.push(candidate);
    }
  }

  return result;
};