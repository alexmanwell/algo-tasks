// https://www.codewars.com/kata/592538b3071ba54511000219

const primeProduct = (n) => {
  if (n < 4) {
    return 0;
  }
  let primes = new Array(n + 1).fill(true);
  for (let i = 2; i * i <= primes.length; i++) {
    if (primes[i]) {
      for (let j = i; i * j <= primes.length; j++) {
        primes[i * j] = false;
      }
    }
  }

  let max = 0;
  for (let i = Math.floor(primes.length / 2); i >= 0; i--) {
    const current = i;
    const next = n - i;
    if (primes[current] && primes[next]) {
      const candidate = current * next;
      if (max < candidate) {
        max = candidate;
      }
    }
  }

  return max;
};