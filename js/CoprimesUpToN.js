// https://www.codewars.com/kata/59e0dbb72a7acc3610000017

const isCoprimes = (a, b) => {
  const min = (a < b) ? a : b;
  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      return false;
    }
  }

  return true;
};

const coprimes = (n) => {
  let b = 0;
  let result = [];
  for (let i = n - 1; i > b; i--) {
    const a = i;
    b = n - a;
    if (isCoprimes(a, b)) {
      if (a === b) {
        result.push(a);
      } else {
        result.push(a, b);
      }
    }
  }

  return result.sort((a, b) => a - b);
}