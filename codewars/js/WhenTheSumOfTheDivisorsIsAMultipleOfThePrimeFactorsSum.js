// https://www.codewars.com/kata/562c04fc8546d8147b000039

const sum = (arr) => {
  return arr.reduce((acc, n) => acc + n, 0);
};

const listOfPrimes = (n) => {
  const result = [];
  while (n !== 1) {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        result.push(i);
        n = n / i;
        break;
      }
    }
  }

  return result;
};

const multipliers = (n) => {
  const result = [];
  let max = n;
  for (let i = 1; i < max; i++) {
    if (n % i === 0) {
      max = n / i;
      result.push(i, max);
    }
  }

  return result;
};

const dsMultofPfs = (n1, n2) => {
  const result = [];
  for (let i = n1; i <= n2; i++) {
    const sumPrimes = sum(listOfPrimes(i));
    const sumMultipliers = sum(multipliers(i));
    if (sumMultipliers % sumPrimes === 0) {
      result.push(i);
    }
  }

  return result;
};