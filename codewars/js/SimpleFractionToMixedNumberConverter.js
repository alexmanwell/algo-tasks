// https://www.codewars.com/kata/556b85b433fb5e899200003f

const multipliers = (n) => {
  let result = [];
  let divisor = 2;
  while (n > 1 && divisor <= Math.sqrt(n)) {
    while (n % divisor === 0) {
      result.push(divisor);
      n /= divisor;
    }
    if (n % divisor !== 0) {
      divisor++;
    }
  }
  result.push(n);

  return result;
};

const countDigits = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    map[value] = map[value] ? map[value] + 1 : 1;
  }

  return map;
};

const removeCommonMultipliers = (arr1, arr2) => {
  const numerator = countDigits(arr1);
  const denominator = countDigits(arr2);
  for (let [digit, amount] of Object.entries(numerator)) {
    if (denominator[digit]) {
      if (denominator[digit] > numerator[digit]) {
        denominator[digit] -= amount;
        delete numerator[digit];
      } else if (denominator[digit] < numerator[digit]) {
        numerator[digit] = amount - denominator[digit];
        delete denominator[digit];
      } else {
        delete numerator[digit];
        delete denominator[digit];
      }
    }
  }

  return [Object.entries(numerator).reduce((acc, [k, v]) => acc * Math.pow(k, v), 1),
    Object.entries(denominator).reduce((acc, [k, v]) => acc * Math.pow(k, v), 1)];
};

const mixedFraction = (s) => {
  let [numerator, denominator] = s.split("/").map(Number);
  if (denominator === 0) {
    throw new Error("Must raise ZeroDivisionError");
  }
  if (numerator === 0) {
    return "0";
  }
  let isNegative = (numerator < 0 && denominator < 0) || (numerator >= 0 && denominator >= 0);
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let number = Math.floor(numerator / denominator);
  let partNumber = numerator - number * denominator;
  let part;
  if (partNumber) {
    part = removeCommonMultipliers(
      multipliers(partNumber),
      multipliers(denominator)
    );
  }
  let result = number ? number.toString() : "";
  result = part ? result + " " + part[0] + "/" + part[1] : result;
  result = !isNegative ? "-" + result.trim() : result;

  return result.trim();
};