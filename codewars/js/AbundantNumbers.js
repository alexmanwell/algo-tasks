// https://www.codewars.com/kata/57f3996fa05a235d49000574

const sumSet = (set) => {
  return Array
    .from(set)
    .reduce((acc, value) => acc + value, 0);
};

const abundant = (h) => {
  let result;
  let multipliers = new Set();
  for (let i = h; i >= 0; i--) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        multipliers.add(j).add(i / j);
      }
    }
    const diff = sumSet(multipliers) + 1 - i;
    if (diff > 0) {
      result = [[i], [diff]];
      break;
    }

    multipliers = new Set();
  }

  return result ? result : null;
};