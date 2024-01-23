// https://www.codewars.com/kata/55f347cfb44b879e1e00000d

const reduce = (primes, counts) => {
  return primes.reduce((acc, prime, index) =>
    acc * prime ** counts[index],
    1
  );
};

const combinations = (a, b) => {
  let result = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      result.push([i, j]);
    }
  }

  return result;
};

const countPrimes = (prime, n) => {
  let count = 0;
  while (parseInt(n) > 0) {
    n /= prime;
    count++;
  }

  return count - 1;
};

const highestBiPrimeFac = (p1, p2, n) => {
  let map = new Map();
  const a = countPrimes(p1, n);
  const b = countPrimes(p2, n);
  const countsPrimes = combinations(a, b);
  for (let counts of countsPrimes) {
    const value = reduce([p1, p2], counts);
    if (value <= n) {
      map.set(value, counts);
    }
  }
  const max = Math.max(...map.keys());

  return [max, ...map.get(max)];
};