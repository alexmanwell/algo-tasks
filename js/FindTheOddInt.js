// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = (value) => {
  let results = new Map();
  for (let i = 0; i < value.length; i++) {
    let value = results.get(value[i]);
    (value !== undefined) ? results.set(value[i], value + 1) : results.set(value[i], 1);
  }

  return getOddValue(results);
};

const getOddValue = (values) => {
  let result;
  for (let [key, value] of values) {
    if (!isEven(value)) {
      result = key;
    }
  }

  return result
};

const isEven = (value) => {
  return value % 2 === 0
};