// https://www.codewars.com/kata/59f38b033640ce9fc700015b

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const total = (arr) => {
  return arr.reduce((acc, v, index) =>
    isPrime(index) ? acc + v : acc, 0
  );
};