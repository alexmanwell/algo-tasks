// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

const findDigits = (arr, maxDigit) => {
  let index = 0;
  let digits = [];
  while (index < arr.length - 1) {
    let count = 0;
    while (
      arr[index] === arr[index + 1]
      && count !== maxDigit - 1) {
      count++;
      index++;
    }
    if (count === maxDigit - 1) {
      digits.push(arr[index - 1]);
    }
    index++;
  }

  return digits;
};

const toArray = (num) => {
  return num
    .toString()
    .split("")
    .map(Number)
};

const tripledouble = (num1, num2) => {
  const tripleDigits = findDigits(toArray(num1), 3);
  const twiceDigits = findDigits(toArray(num2), 2);

  return tripleDigits.filter(d =>
    twiceDigits.includes(d)
  ).length ? 1 : 0;
};