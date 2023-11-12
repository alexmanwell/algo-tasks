// https://www.codewars.com/kata/55e0a2af50adf50699000126

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const findPrimes = (n) => {
  const primes = [];
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const hasEvenDigit = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .filter(digit => digit % 2 === 0).length;
};

const removeNumbersContainsEvenDigit = (arr) => {
  const numbers = [];
  for (let number of arr) {
    if (!hasEvenDigit(number)) {
      numbers.push(number);
    }
  }

  return numbers;
};

const findNextOddPrime = (n) => {
  for (let i = n + 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (isPrime(i) && !hasEvenDigit(i)) {
      return i;
    }
  }
};

const onlyOddDigPrimes = (n) => {
  const primes = findPrimes(n);
  const nextPrime = findNextOddPrime(n);
  const oddPrimes = removeNumbersContainsEvenDigit(primes);

  return [
    oddPrimes.length,
    oddPrimes[oddPrimes.length - 1],
    nextPrime
  ];
};