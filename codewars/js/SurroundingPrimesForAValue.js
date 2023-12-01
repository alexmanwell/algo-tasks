// https://www.codewars.com/kata/560b8d7106ede725dd0000e2

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const primeBefAft = (num) => {
  let result = [];
  for (let i = 1; i < Infinity; i++) {
    let candidate = num + i;
    if (isPrime(candidate)) {
      if (!(result[0] >= num)) {
        result.push(candidate);
      }
    }
    candidate = num - i;
    if (isPrime(candidate)) {
      if (!(result[0] <= num)) {
        result.push(candidate);
      }
    }
    if (result.length === 2) {
      break;
    }
  }

  return result.sort((a, b) => a - b);
};