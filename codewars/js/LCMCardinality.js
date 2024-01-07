// https://www.codewars.com/kata/5c45bef3b6adcb0001d3cc5f
// TODO: done this task. Tests don't pass (time limit).
const dividers = (n) => {
  let result = [];
  let divider = 1;
  while (divider < n) {
    if (n % divider === 0) {
      result.push(divider);
    }
    divider++;
  }
  result.push(n);

  return result;
};

function* generateCombinations(values, k) {
  if (k < 1) {
    yield [];
    return;
  }

  for (let i = 0; i <= values.length - k; i++) {
    const items = values.slice(i + 1, values.length);

    for (const comb of generateCombinations(items, k - 1)) {
      yield [values[i], ...comb];
    }
  }
}

const combinations = (arr, k) => {
  let result = [];
  for (let combination of generateCombinations(arr, k)) {
    result.push(combination);
  }

  return result;
};

const gcd = (a, b) => {
  return a === 0
    ? b
    : gcd(b % a, a);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const lcmCardinality = (n) => {
  const findPairs = combinations(dividers(n), 2);
  let result = 0;
  for (const [a, b] of findPairs) {
    if (lcm(a, b) === n) {
      result++;
    }
  }

  return result + 1;
};