// https://www.codewars.com/kata/55830eec3e6b6c44ff000040

const countMultipliers = (n) => {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i, n / i);
    }
  }

  return new Set(result).size;
};

const oddity = (n) => {
  return countMultipliers(n) % 2 === 0
    ? "even"
    : "odd";
};