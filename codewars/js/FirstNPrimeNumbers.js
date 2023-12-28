// https://www.codewars.com/kata/535bfa2ccdbf509be8000113

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const Primes = {
  primes: [],

  first(n) {
    this.primes = new Array(n);
    let count = 0;
    for (let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
      if (isPrime(i)) {
        this.primes[count] = i;
        count++;
      }
      if (n === count) {
        break;
      }
    }

    return this.primes;
  },

  last(n) {
    return this.primes.slice(this.primes.length - n);
  }
};