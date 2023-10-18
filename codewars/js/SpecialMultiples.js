// https://www.codewars.com/kata/55e785dfcb59864f200000d9

const primes = (size) => {
  const result = [];
  let count = 2;
  while (result.length < size) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(count); i++) {
      if (count % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result.push(count);
    }
    count++;
  }

  return result;
};

const countSpecMult = (n, value) => {
  const multiplier = primes(n).reduce((acc, n) => acc * n, 1);
  return Math.floor(value / multiplier);
};