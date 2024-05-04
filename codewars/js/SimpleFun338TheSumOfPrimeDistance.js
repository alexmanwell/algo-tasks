// https://www.codewars.com/kata/5959df61cc30ac2f03000046
// TODO: Doesn't pass time limit tests.

const sumOfPrimeDistance = (arr) => {
  const max = arr[arr.length - 1];
  const primes = new Array(max + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i * i <= max; i++) {
    if (primes[i]) {
      for (let j = 2; j * i <= max; j++) {
        primes[i * j] = false;
      }
    }
  }
  let countRangePrimes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const start = arr[i];
    let countPrimes = 0;
    for (let j = i + 1; j < arr.length; j++) {
      const end = arr[j];
      for (let k = start; k < end; k++) {
        countPrimes += primes[k] ? 1 : 0;
      }
    }
    countRangePrimes.push(countPrimes);
  }

  return countRangePrimes.reduce((a, b) => a + b);
};