// https://www.codewars.com/kata/5a946d9fba1bb5135100007c

const isPrime = (n) => {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const findLeastPrime = (n) => {
  let primeNumber = -1;
  while (true) {
    if (isPrime(n)) {
      primeNumber = n;
      break;
    } else {
      n++;
    }
  }

  return primeNumber;
};

const minimumNumber = (numbers) => {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  return findLeastPrime(sum) - sum;
};