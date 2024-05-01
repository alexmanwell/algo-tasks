// https://www.codewars.com/kata/59ce11ea9f0cbc8a390000ed

const solve = (a, b) => {
  let isPrimes = new Array(b + 1).fill(true);
  for (let i = 4; i < isPrimes.length; i += 2) {
    isPrimes[i] = false;
  }
  for (let i = 3; i * i <= b; ++i) {
    if (isPrimes[i]) {
      for (let j = i; j * i <= b; ++j) {
        isPrimes[i * j] = false;
      }
    }
  }
  isPrimes[0] = false;
  isPrimes[1] = false;
  const primes = isPrimes.map((prime, index) => prime ? index : 0).filter(prime => prime);
  let result = 0;
  for (let i = 0; i < primes.length; i++) {
    const prime = primes[i];
    if (isPrimes[i + 1] && a <= prime && prime <= b) {
      result += prime;
    }
  }

  return result
};