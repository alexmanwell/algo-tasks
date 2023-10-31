// https://www.codewars.com/kata/564057bc348c7200bd0000ff

const DIVISOR = 13;

const divisibility = (n, mod) => {
  while (true) {
    const result = n
      .toString()
      .split("")
      .map(Number)
      .reverse()
      .reduce((acc, value, index) => {
        return acc + value * (Math.pow(10, index) % mod)
      }, 0);

    if (result === n) {
      break;
    }
    n = result;
  }

  return n;
};

const thirt = (n) => {
  return divisibility(n, DIVISOR);
};