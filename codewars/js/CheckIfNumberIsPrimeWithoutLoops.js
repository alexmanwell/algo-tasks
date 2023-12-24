// https://www.codewars.com/kata/58878393fc23972533001434

const isPrime = (number, divisor = 3) => {
  number = Math.abs(number);
  if (number < 2 || number % 2 === 0 ||
    number % divisor === 0) {
    return false;
  }
  if (divisor * divisor > number ||
    number === 2 && number === 3) {
    return true;
  }

  return isPrime(number, divisor + 2);
};