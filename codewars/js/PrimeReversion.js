// https://www.codewars.com/kata/59b46276afcda204ed000094

const isPrime = (a) => {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }

  return a >= 2;
};

const rangePrimes = (a, b) => {
  let primes = [];
  for (let i = a >= 2 ? a : 2; i < b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};

const combination = (a, b) => {
  let pairs = [];
  const primes = rangePrimes(a, b);
  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      pairs.push([primes[i], primes[j]]);
    }
  }

  return pairs;
};

const isPrimePairMultiplyAndAddition = (arr) => {
  return isPrime(
    arr
      .reduce((acc, v) => acc * v, 1)
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, v) => acc + v, 0));
};

const listOfPrimesMultiplyAndAddition = (arr) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrimePairMultiplyAndAddition(arr[i])) {
      pairs.push(arr[i]);
    }
  }

  return pairs;
};

const solve = (a, b) => {
  const pairs = combination(a, b);
  return listOfPrimesMultiplyAndAddition(pairs).length;
};