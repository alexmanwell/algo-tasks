// https://www.codewars.com/kata/59a9466f589d2af4c50001d8

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const isSameLastTwoDigits = (a, b) => {
  return (a % 100) === (b % 100);
};

const isPrimeFirstTwoDigits = (a, b) => {
  a = +a.toString().substring(0, 2);
  b = +b.toString().substring(0, 2);

  return isPrime(a) && isPrime(b);
};

const solve = (a, b) => {
  let numbers = [];
  for (let i = a; i <= b; i++) {
    const candidate = i * i;
    if (isSameLastTwoDigits(candidate, i) &&
      isPrimeFirstTwoDigits(candidate, i)) {
      numbers.push(candidate);
    }
  }

  return numbers.length;
};