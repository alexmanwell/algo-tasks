// https://www.codewars.com/kata/55f4e56315a375c1ed000159

const sumDigits = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, n) =>
      acc + n, 0
    );
};

const powerSumDigTerm = (n) => {
  let result = [];
  const maxPower = 54;
  let power = maxPower;
  const limit = Math.sqrt(2) * maxPower;
  for (let i = 2; i < limit; i++) {
    for (let j = 2; j <= power; j++) {
      const candidate = i ** j;
      const sum = sumDigits(candidate);
      if (sum === i) {
        result.push(candidate);
      }
    }
    power -= 0.5;
  }

  return result.sort((a, b) => a - b)[n - 1];
};