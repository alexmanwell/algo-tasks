// https://www.codewars.com/kata/57a2bd03bb9944669100042e

const isPrimes = (n) => {
  if (n > 3 && n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return n >= 2;
};

const findOutPrime = (n) => {
  let primes = [];
  let count = 1;
  let size = n.toString().length;
  while (count <= size) {
    let index = 0;
    while (index + count <= size) {
      let candidate = +n.toString().substring(index, index + count);
      if (isPrimes(candidate)) {
        primes.push(candidate);
      }
      index++;
    }
    count++;
  }

  return primes.length !== 0
    ? Math.max(...primes)
    : null;
};