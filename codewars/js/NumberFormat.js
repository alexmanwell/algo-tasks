// https://www.codewars.com/kata/565c4e1303a0a006d7000127

const numberFormat = (number) => {
  const negative = number < 0;
  number = Math.abs(number).toString().split("").reverse();
  const size = number.length;
  let separator = 3;
  let count = 0;
  let result = "";
  while (count * separator <= size) {
    result += number.slice(separator * count, separator * (count + 1)).join("");
    result += (size > 3 && result.length <= size) ? "," : "";
    count++;
  }
  result = result.split("").reverse().join("");

  return negative ? "-" + result : result;
};