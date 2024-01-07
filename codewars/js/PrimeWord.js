// https://www.codewars.com/kata/5b1e2c04553292dacd00009e

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n >= 2;
};

const primeWord = (arr) => {
  let result = [];
  for (const [word, n] of arr) {
    const values = word.split("").map(c => c.charCodeAt(0) + n);
    result.push(values.filter(isPrime).length > 0 ? 1 : 0);
  }

  return result;
};