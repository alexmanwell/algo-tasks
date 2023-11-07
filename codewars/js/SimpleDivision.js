// https://www.codewars.com/kata/59ec2d112332430ce9000005

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const primeFactorsOfNumber = (n) => {
  const primes = new Set();
  let candidate = n;
  for (let i = 2; i <= n;) {
    if (candidate % i === 0 && candidate !== 1) {
      if (!primes.has(i)) {
        primes.add(i)
      }
      candidate = parseInt(candidate / i);
    } else {
      i++;
    }
  }

  return primes;
};

const solve = (a, b) => {
  if ((a % 2 === 0 && b % 2 !== 0) ||
    (a % 2 !== 0 && b % 2 === 0)) {
    return false;
  }
  const primesA = primeFactorsOfNumber(a);
  const primesB = primeFactorsOfNumber(b);
  for (let primeB of primesB) {
    if (!primesA.has(primeB)) {
      return false;
    }
  }

  return true;
};