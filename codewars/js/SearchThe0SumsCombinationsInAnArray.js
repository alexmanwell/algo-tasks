// https://www.codewars.com/kata/5711fc7c159cde6ac70003e2

function* generateCombinations(values, size) {
  if (size < 1) {
    yield [];
    return;
  }

  for (let i = 0; i <= values.length - size; i++) {
    const restValues = values.slice(i + 1, values.length);

    for (const combination of generateCombinations(restValues, size - 1)) {
      yield [values[i], ...combination];
    }
  }
}

const combinations = (arr, n) => {
  let result = [];
  for (const combination of generateCombinations(arr, n)) {
    result.push(combination);
  }

  return result;
};

const sum = (arr) => {
  return arr.reduce((acc, v) =>
    acc + v, 0
  );
};

const isZero = (n) => {
  return n === 0;
};

const ascendingCompare = (a, b) => {
  return a - b;
};

const findZeroSumGroups = (arr, n) => {
  if (!arr.length) {
    return "No elements to combine";
  }
  arr = [...new Set(arr)].sort(ascendingCompare);
  let result = [];
  for (const combination of combinations(arr, n)) {
    if (isZero(sum(combination))) {
      result.push(combination)
    }
  }

  if (!result.length) {
    return "No combinations";
  }
  return result.length === 1
    ? result[0]
    : result;
};