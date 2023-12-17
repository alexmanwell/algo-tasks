// https://www.codewars.com/kata/58de77a2c19f096a5a00013f

const countDigit = (arr) => {
  let map = {};
  for (let v of arr) {
    map[v] = map[v] ? map[v] + 1 : 1;
  }

  return map;
};

const toArray = (str) => {
  return str
    .split("")
    .map(Number)
    .sort((a, b) =>
      b - a
    )
};

const findAdded = (st1, st2) => {
  const arr = toArray(st1);
  const arr2 = toArray(st2);
  if (arr.length > arr2.length) {
    return "";
  }

  const digits = countDigit(arr);
  const digits2 = countDigit(arr2);
  let result = "";
  for (let [digit, amount] of Object.entries(digits2)) {
    const v = digits[digit];
    if (v < amount) {
      result += digit.toString().repeat(amount - v);
    }
    if (!digits[digit]) {
      result += digit.toString().repeat(amount);

    }
  }
  return result;
};