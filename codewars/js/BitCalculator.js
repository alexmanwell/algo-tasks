// https://www.codewars.com/kata/52ece9de44751a64dc0001d9

const toDecimal = (arr) => {
  const length = arr.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += arr[length - 1 - i] * Math.pow(2, i);
  }

  return result;
};

const calculate = (num1, num2) => {
  const digits1 = num1.split("").map(Number);
  const digits2 = num2.split("").map(Number);

  return toDecimal(digits1) + toDecimal(digits2);
};